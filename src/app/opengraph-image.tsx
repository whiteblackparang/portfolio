// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const alt = "JongHun Lee | Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800 }}>JongHun Lee</div>
        <div style={{ fontSize: 48, marginTop: 16, color: "#6382ff" }}>
          Data Analyst
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#9ca3af" }}>
          SQL · Python · A/B Test · Tableau
        </div>
      </div>
    ),
    size
  );
}