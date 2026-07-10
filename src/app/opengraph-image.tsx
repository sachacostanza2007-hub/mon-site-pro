import { ImageResponse } from "next/og";

export const alt = "byCosta — Création de sites web premium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0c0a12",
          backgroundImage:
            "radial-gradient(ellipse 900px 600px at 10% 0%, rgba(139,95,166,0.55), transparent 60%), radial-gradient(ellipse 800px 600px at 100% 100%, rgba(59,78,158,0.55), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "10px",
            fontSize: 46,
            color: "#9c93a8",
          }}
        >
          <span>by</span>
          <span
            style={{
              fontSize: 92,
              fontWeight: 600,
              color: "#f1edf6",
            }}
          >
            Costa
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 54,
            fontWeight: 600,
            color: "#f1edf6",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Des sites qui donnent envie d&apos;être contacté
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#bb8fda",
          }}
        >
          bycosta.eu — agence de création de sites web
        </div>
      </div>
    ),
    { ...size }
  );
}
