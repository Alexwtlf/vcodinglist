import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          backgroundColor: "#070A0E",
          backgroundImage:
            "radial-gradient(900px 500px at 20% 20%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(900px 500px at 80% 30%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(900px 600px at 50% 90%, rgba(20,184,166,0.18), transparent 60%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 30, opacity: 0.9, letterSpacing: -0.2 }}>VcodingList</div>
        <div style={{ marginTop: 18, fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
          Launch. Validate.
        </div>
        <div style={{ marginTop: 8, fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
          Reach Real Users.
        </div>
        <div style={{ marginTop: 28, fontSize: 34, opacity: 0.85, maxWidth: 980 }}>
          The product discovery and ranking platform for AI-native builders.
        </div>
      </div>
    ),
    size
  );
}

