import { ImageResponse } from "next/og"
import { SITE } from "@/lib/content/site"

export const alt = `${SITE.name} — ${SITE.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#0d1525",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <p
          style={{
            color: "#3a9ab5",
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Woodbridge, VA &amp; Philadelphia, PA
        </p>
        <p
          style={{
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          {SITE.name}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "28px",
            lineHeight: 1.4,
            textAlign: "center",
            maxWidth: "820px",
          }}
        >
          {SITE.tagline}
        </p>
      </div>
    ),
    size
  )
}
