import { ImageResponse } from "next/og";

export const alt = "Kelum Isuranga — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#0a0a0a",
          color: "#ebebeb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Kelum Isuranga</div>
        <div style={{ fontSize: 32, marginTop: 16, color: "#a3a3a3" }}>
          Software Engineer · Go & Node.js backend systems
        </div>
        <div style={{ fontSize: 24, marginTop: 48, color: "#ff6b2b" }}>
          kelum.me
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
