export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem", background: "#0f0f0f", color: "white" }}>
      <h1 style={{ fontSize: "3rem" }}>
        🎮 Welcome to <span style={{ color: "#0af" }}>PainBhai0 Creator Hub</span>
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Gaming | Streaming | Donate | AI | Secure
      </p>

      <div style={{ margin: "2rem 0" }}>
        <a
          href="/api/auth/signin"
          style={{
            padding: "12px 24px",
            background: "#0af",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          🔐 Login with Google
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <a href="https://youtube.com/@PainBhai0" target="_blank" style={{ color: "#fff", textDecoration: "none" }}>
          📺 YouTube
        </a>
        <a href="https://discord.gg/F6k6vuHnA2" target="_blank" style={{ color: "#fff", textDecoration: "none" }}>
          💬 Discord
        </a>
        <a href="https://www.instagram.com/painbhai0" target="_blank" style={{ color: "#fff", textDecoration: "none" }}>
          📸 Instagram
        </a>
      </div>

      <p style={{ marginTop: "1rem", fontWeight: "bold", fontSize: "1.1rem" }}>
        💸 Donate via UPI: <span style={{ color: "#0af" }}>painbhai0@upi</span>
      </p>
    </div>
  );
}
