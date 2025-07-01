import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🎮 Welcome to PainBhai0 Creator Hub</h1>
      <p>Gaming | Streaming | Donate | AI | Secure</p>

      <div style={{ margin: '20px 0' }}>
        {session ? (
          <>
            <p>✅ Logged in as {session.user.name}</p>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <button onClick={() => signIn("google")}>Login with Google</button>
        )}
      </div>

      <p>📺 <a href="https://youtube.com/@PainBhai0" target="_blank">YouTube</a></p>
      <p>💬 <a href="https://discord.gg/F6k6vuHnA2" target="_blank">Discord</a></p>
      <p>📸 <a href="https://www.instagram.com/painbhai0" target="_blank">Instagram</a></p>
      <p>💸 Donate via UPI: <strong>painbhai0@upi</strong></p>
    </div>
  );
}
