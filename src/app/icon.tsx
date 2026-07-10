import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backgroundColor: "#17121f",
          backgroundImage:
            "linear-gradient(135deg, #8b5fa6 0%, #3b4e9e 100%)",
        }}
      >
        <span
          style={{
            fontSize: 40,
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
