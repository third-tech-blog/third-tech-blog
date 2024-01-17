"use client";

import { useSession, signOut } from "next-auth/react";

const Login_after = () => {
  const { data: session, status } = useSession();

  // ログインしているか確認
  if (status === "authenticated") {
    return (
      <div className="text-center mt-6">
        <h2>{session.user.name}でログインしています</h2>
        <p>{session.user.email}</p>
        <button
          className="mt-4 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
        >
          ログアウト
        </button>
      </div>
    );
  }
};

export default Login_after;
