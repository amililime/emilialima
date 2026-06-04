import { ImageResponse } from "next/og";

export const alt = "Emilia Lima — Full Stack Developer";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAFAFA",
          color: "#0A0A0A",
          fontFamily: "serif",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            color: "rgba(10,10,10,0.55)",
            marginBottom: 40,
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 200,
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            textAlign: "center",
          }}
        >
          Emilia Lima
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 18,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(10,10,10,0.45)",
            fontFamily: "sans-serif",
          }}
        >
          emilialima.com
        </div>
      </div>
    ),
    { ...size },
  );
}
