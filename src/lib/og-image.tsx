import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

/** Shared Open Graph / Twitter card artwork using only the brand tokens. */
export function createOgImage() {
  const displayUrl = siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
            <span style={{ fontSize: "28px", fontWeight: 600, color: "#0F172A" }}>
              {profile.brand}
            </span>
            <span style={{ fontSize: "18px", color: "#64748B" }}>{profile.location}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "76px",
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </span>
          <span style={{ fontSize: "36px", color: "#2563EB", marginTop: "12px" }}>
            {profile.role}
          </span>
          <span
            style={{
              fontSize: "24px",
              color: "#64748B",
              marginTop: "28px",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            {profile.summary}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E2E8F0",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "20px", color: "#64748B" }}>{displayUrl}</span>
          <span
            style={{
              fontSize: "20px",
              color: "#2563EB",
              backgroundColor: "#EFF6FF",
              padding: "8px 18px",
              borderRadius: "999px",
            }}
          >
            {profile.role}
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
