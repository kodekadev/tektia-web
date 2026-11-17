import { ImageResponse } from "next/og";

export const alt = "TEKTIA — Automatización, CRM y chatbots con IA para empresas en Chile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#111111",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: "#F97316" }} />
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: 4 }}>TEKTIA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, display: "flex", flexWrap: "wrap" }}>
            <span>Haz en segundos lo que hoy te toma&nbsp;</span>
            <span style={{ color: "#F97316" }}>horas.</span>
          </div>
          <div style={{ fontSize: 32, color: "#9CA3AF" }}>
            Automatización · CRM · Chatbots con IA · Páginas web
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#F97316" }}>tektia.cl · Empresas en Chile</div>
      </div>
    ),
    { ...size }
  );
}
