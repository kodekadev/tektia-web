import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BigQuery } from "@google-cloud/bigquery";

const resend = new Resend(process.env.RESEND_API_KEY);

const bigquery = new BigQuery({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

const FROM = "TEKTIA <contacto@ko-deka.com>";
const TO   = process.env.NOTIFY_EMAIL ?? "bastian.alfaro@gmail.com";
const WA   = process.env.WHATSAPP_NUMBER ?? "56928764172";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, service } = await req.json();

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    const waText = encodeURIComponent(
      `📋 Nuevo lead TEKTIA\n\n👤 ${name}\n📱 ${phone}\n📧 ${email}\n🛠 ${service}`
    );
    const waLink = `https://wa.me/${WA}?text=${waText}`;

    // Ejecutar en paralelo: email + BigQuery
    await Promise.all([
      // Email de notificación
      resend.emails.send({
        from: FROM,
        to: TO,
        subject: `Nuevo lead: ${name} — ${service}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:28px;background:#fff">
            <div style="background:#F97316;height:4px;border-radius:2px;margin-bottom:24px"></div>
            <h2 style="color:#111;margin:0 0 20px;font-size:20px">Nuevo lead — TEKTIA</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr style="border-bottom:1px solid #F2F0EC"><td style="padding:10px 0;color:#6B7280;width:100px">Nombre</td><td style="padding:10px 0;font-weight:600;color:#111">${name}</td></tr>
              <tr style="border-bottom:1px solid #F2F0EC"><td style="padding:10px 0;color:#6B7280">Teléfono</td><td style="padding:10px 0;font-weight:600;color:#111">${phone}</td></tr>
              <tr style="border-bottom:1px solid #F2F0EC"><td style="padding:10px 0;color:#6B7280">Email</td><td style="padding:10px 0;font-weight:600;color:#111">${email}</td></tr>
              <tr><td style="padding:10px 0;color:#6B7280">Servicio</td><td style="padding:10px 0;font-weight:600;color:#111">${service}</td></tr>
            </table>
            <a href="${waLink}" style="display:inline-block;margin-top:24px;background:#25D366;color:#fff;font-weight:700;padding:12px 22px;border-radius:10px;text-decoration:none;font-size:14px">
              💬 Responder por WhatsApp
            </a>
          </div>
        `,
      }),

      // Guardar en BigQuery
      bigquery.query({
        query: `
          INSERT INTO \`${process.env.GCP_PROJECT_ID}.${process.env.BQ_DATASET}.${process.env.BQ_TABLE}\`
          (nombre, telefono, email, servicio, fuente, created_at)
          VALUES (@nombre, @telefono, @email, @servicio, @fuente, CURRENT_TIMESTAMP())
        `,
        params: {
          nombre: name,
          telefono: phone,
          email,
          servicio: service,
          fuente: "landing-tektia",
        },
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact route error", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

