"use client";
import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
export default function LoginForm() {
  async function handleLogin(event: FormData) {
    const userData = Object.fromEntries(event) as {
      email: string;
      password: string;
    };
    const res = await signIn("credentials", {
      email: userData.email,
      password: userData.password,
      redirect: false,
    });
    if (res?.error) return console.log({ message: res.error });
    redirect("/");
  }
  return (
    <form
      className="absolute z-20 left-1/2 translate-x-[-50%] top-[80px]"
      action={handleLogin}
    >
      <input
        placeholder="EMAIL"
        id="email"
        name="email"
        type="email"
        className={`w-[548px] h-[53px] border-[.4px]  rounded-[9px]  pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
          false
            ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
            : "bg-white border-[#280f0186]"
        }`}
      />
      <input
        placeholder="PASSWORD"
        id="password"
        name="password"
        type="password"
        className={`w-[548px] h-[53px] border-[.4px]  rounded-[9px]  pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
          false
            ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
            : "bg-white border-[#280f0186]"
        }`}
      />
      <button className="font-family text-[#280f01] w-[548px] h-[60px] font-[100] text-[30px] border-[#280f01] border-[.3px] rounded-[9px] linear-gradient">
        LOG IN
      </button>
      <p className="pt-5 font-[100]">
        don’t have account?{" "}
        <Link href="/signup">
          <span className="text-blue-500">make account</span>
        </Link>
      </p>
    </form>
  );
}
