import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#0a0a0a",
          borderRadius: 7,
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#f5f5f5",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size },
  );
}
