import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17121f",
          backgroundImage:
            "linear-gradient(135deg, #8b5fa6 0%, #3b4e9e 100%)",
        }}
      >
        <span
          style={{
            fontSize: 108,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "serif",
          }}
        >
          C
        </span>
      </div>
    ),
    { ...size }
  );
}
