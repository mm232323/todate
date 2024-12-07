import SignupForm from "@/components/Forms/signupForm";
import React from "react";

export default function SignupPage() {
  return (
    <div className="w-full h-[680px] bg-black/5 flex gap-[50px] p-[20px] pl-[50px] items-center">
      <div className="flex flex-col gap-[10px] items-center">
        <h1 className="text-[52px] font-[500]">SIGNUP</h1>
        <p className="font-[100] text-justify text-[20px] w-[525px] tracking-[4px]">
          Join Todate today for free and take control of your tasks and
          timelines! Whether it&apos;s managing daily to-dos or organizing
          complex missions, Todate simplifies the process, keeping you on track
          and focused. Our intuitive platform helps you break down your goals
          into actionable steps, making it easier to manage your time and
          priorities. Sign up now and start achieving more with less stress—at
          no cost!
        </p>
      </div>
      <div className="h-[579px] bg-black/60 w-[1px] rounded-[2px]" />
      <div className="w-[625px] h-[600px] rounded-[22px] border-[.5px] border-[#200d0163] relative p-[90px] box-shadow">
        <div className="w-[150px] h-[150px] rounded-full bg-red-500 blur-[17px]" />
        <div className="w-[100px] h-[100px] rounded-full bg-blue-500 absolute right-0 blur-[17px]" />
        <div className="w-[120px] h-[120px] rounded-full bg-emerald-500 bottom-0 absolute blur-[17px]" />
        <div className="w-[110px] h-[110px] rounded-full bg-purple-500 right-0 bottom-0 absolute blur-[17px]" />
        <div className="w-full h-full bg-[#ffffff1c] absolute left-0 top-0 z-10 rounded-[22px] backdrop-blur-[50px]" />
        <SignupForm />
      </div>
    </div>
  );
}
