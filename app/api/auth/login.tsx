"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

import localImage from "../../../public/google_login.png";
import { useRouter } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  const redirectUrl = () => {
    router.push("/login_after");
  };

  // ログインしていない場合
  if (status !== "authenticated") {
    return (
      <div className="text-center mt-6">
        <button
          onClick={() =>
            signIn("google", {
              prompt: "login",
              callbackUrl: "http://localhost:3000/login_after",
            })
          }
        >
          <Image
            src={localImage}
            alt="Googleでログイン"
            className="w-60"
            priority={false}
          ></Image>
        </button>
      </div>
    );
  } else if (status === "authenticated") {
    // ログイン済みの場合、/login_afterにリダイレクト
    redirectUrl();
    return null;
  }
};

export default Login;
