import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h1>🎮 Welcome to PainBhai0 Creator Hub</h1>
      <p>Gaming | Streaming | Donate | AI | Secure</p>

      {!session ? (
        <button onClick={() => signIn("google")}>Login with Google</button>
      ) : (
        <>
          <p>Welcome, {session.user.name}</p>
          <button onClick={signOut}>Logout</button>
        </>
      )}

      <hr />
      <a href="https://youtube.com/@PainBhai0" target="_blank">📺 YouTube</a> |
      <a href="https://discord.gg/F6k6vuHnA2" target="_blank"> Discord</a> |
      <a href="https://instagram.com/painbhai0" target="_blank"> Instagram</a>
      <p>Donate via UPI: <strong>painbhai0@upi</strong></p>
    </main>
  );
}
