import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo.config";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || SITE.name;
  const subtitle = searchParams.get("subtitle") || SITE.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #1f2937 60%, #111827 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.85, marginTop: 12 }}>
          {subtitle}
        </div>
        <div style={{ marginTop: 32, fontSize: 20, opacity: 0.8 }}>
          {SITE.domain}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
