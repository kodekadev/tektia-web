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

const FROM = "TEKTIA <contacto@tektia.cl>";
const TO   = process.env.NOTIFY_EMAIL ?? "nexonempresa7@gmail.com";
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

    // Ejecutar en paralelo: emails + BigQuery
    await Promise.all([
      // Email de notificación interna
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

      // Email de confirmación al cliente
      resend.emails.send({
        from: FROM,
        to: email,
        subject: `Recibimos tu consulta, ${name} 👋`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <div style="background:#111111;padding:24px 28px;display:flex;align-items:center;gap:8px">
              <span style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.5px">TEKTIA</span>
              <span style="width:7px;height:7px;border-radius:50%;background:#F97316;display:inline-block;margin-top:2px"></span>
            </div>
            <div style="padding:28px">
            <div style="background:#F97316;height:3px;border-radius:2px;margin-bottom:24px"></div>
            <h2 style="color:#111;margin:0 0 12px;font-size:22px">Hola ${name}, recibimos tu consulta ✅</h2>
            <p style="color:#4B5563;font-size:15px;line-height:1.6;margin:0 0 20px">
              Gracias por contactarnos. Revisamos tu solicitud sobre <strong>${service}</strong> y te responderemos en menos de <strong>24 horas hábiles</strong>.
            </p>
            <p style="color:#4B5563;font-size:15px;line-height:1.6;margin:0 0 24px">
              Si necesitas una respuesta más rápida, escríbenos directamente por WhatsApp:
            </p>
            <a href="https://wa.me/${WA}" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;padding:12px 22px;border-radius:10px;text-decoration:none;font-size:14px">
              💬 Escribir por WhatsApp
            </a>
            <hr style="border:none;border-top:1px solid #F2F0EC;margin:28px 0">
            <p style="color:#9CA3AF;font-size:12px;margin:0">
              TEKTIA · Automatizamos empresas chilenas · <a href="mailto:contacto@tektia.cl" style="color:#F97316">contacto@tektia.cl</a>
            </p>
            </div>
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

