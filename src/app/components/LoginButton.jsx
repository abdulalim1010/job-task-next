"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p>{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
      Login with Google
    </button>
  );
}
