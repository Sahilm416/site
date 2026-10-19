import { ImageResponse } from "next/og";
import { logoPath } from "@/components/logo";
export const alt = "Sahil Mulani, Software Engineer";
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
          justifyContent: "space-between",
          padding: 80,
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="8" fill="#fafafa" />
          <path d={logoPath} fill="#09090b" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -2 }}>
            Sahil Mulani
          </div>
          <div style={{ fontSize: 40, color: "#a1a1aa" }}>
            Software engineer who ships products end to end.
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#71717a" }}>
          sahilmulani.com
        </div>
      </div>
    ),
    size
  );
}
