import LoginForm from "@/components/Forms/loginForm";
import React from "react";
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="w-full h-[680px] bg-black/5 flex gap-[50px] p-[20px] pl-[50px] items-center">
      <div className="flex flex-col gap-[10px] items-center">
        <h1 className="text-[52px] font-[500]">LOGIN</h1>
        <p className="font-[100] text-justify text-[20px] w-[525px] tracking-[4px]">
          Welcome back to Todate! Ready to pick up where you left off? Log in to
          manage your daily to-dos and keep your complex missions on track. With
          Todate, you’ll stay organized, manage your time effectively, and
          easily keep up with your goals. Let’s dive back in and keep the
          momentum going!
        </p>
      </div>
      <div className="h-[579px] bg-black/60 w-[1px] rounded-[2px]" />
      <div className="w-[625px] h-[600px] rounded-[22px] border-[.5px] border-[#200d0163] relative p-[90px] box-shadow">
        <div className="w-[150px] h-[150px] rounded-full bg-red-500 blur-[17px]" />
        <div className="w-[100px] h-[100px] rounded-full bg-blue-500 absolute right-0 blur-[17px]" />
        <div className="w-[120px] h-[120px] rounded-full bg-emerald-500 bottom-0 absolute blur-[17px]" />
        <div className="w-[110px] h-[110px] rounded-full bg-purple-500 right-0 bottom-0 absolute blur-[17px]" />
        <div className="w-full h-full bg-[#ffffff1c] absolute left-0 top-0 z-10 rounded-[22px] backdrop-blur-[50px]" />
        <LoginForm />
        <Image
          src="/loginImg.svg"
          alt="login img"
          width={102.16}
          height={257}
          className="absolute right-[-15px] bottom-0 z-20"
        />
      </div>
    </div>
  );
}
