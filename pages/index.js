export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>🎮 PainBhai0</div>
        <div style={styles.navLinks}>
          <a href="#youtube">YouTube</a>
          <a href="#donate">Donate</a>
          <a href="#socials">Socials</a>
          <a href="/api/auth/signin">Login</a>
        </div>
      </nav>

      {/* HERO */}
      <header style={styles.hero}>
        <h1>🔥 PainBhai0 Creator Hub</h1>
        <p>Gaming | Streaming | AI | Secure</p>
      </header>

      {/* YOUTUBE */}
      <section id="youtube" style={styles.section}>
        <h2>📺 Latest YouTube Video</h2>
        <iframe
          src="https://www.youtube.com/embed/vd8KnE-fj5g"
          allowFullScreen
          style={styles.iframe}
        />
      </section>

      {/* DONATE */}
      <section id="donate" style={styles.section}>
        <h2>💸 Support Me</h2>
        <p>UPI: <strong>painbhai0@upi</strong></p>
        <img
          src="/paytm-qr.jpg"
          alt="Paytm UPI QR"
          style={{ width: 250, borderRadius: 12 }}
        />
      </section>

      {/* SOCIAL LINKS */}
      <section id="socials" style={styles.section}>
        <h2>📲 Follow Me</h2>
        <div style={styles.socialLinks}>
          <a href="https://youtube.com/@PainBhai0" target="_blank">YouTube</a>
          <a href="https://discord.gg/F6k6vuHnA2" target="_blank">Discord</a>
          <a href="https://www.instagram.com/painbhai0" target="_blank">Instagram</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        &copy; 2025 PainBhai0 • Built with 💻 and desi power 🇮🇳
      </footer>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    background: "#111",
    padding: "1rem 2rem",
    color: "#fff",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  hero: {
    textAlign: "center",
    padding: "5rem 2rem",
    background: "#0f0f0f",
    color: "#fff",
  },
  section: {
    textAlign: "center",
    padding: "4rem 2rem",
    background: "#1a1a1a",
    color: "#fff",
  },
  iframe: {
    width: "90%",
    maxWidth: "720px",
    height: "400px",
    border: "none",
    borderRadius: "10px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    fontSize: "1.2rem",
    flexWrap: "wrap",
  },
  footer: {
    textAlign: "center",
    padding: "2rem",
    background: "#111",
    color: "#888",
  },
};
