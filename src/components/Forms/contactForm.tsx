"use client";
import React from "react";
import { useFormState } from "react-dom";
import { contact } from "../../../actions/main";
export default function ContactForm() {
  const [state, action] = useFormState(contact, []);
  return (
    <form
      action={action}
      className="flex flex-col gap-[15px] absolute left-1/2 translate-x-[-50%] w-fit top-1/2 translate-y-[-50%]"
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="FULL NAME"
        className={`w-[391px] h-[64px] border-black/50 border-[.3px] rounded-[6px] rounded-tl-[35px] rounded-tr-[35px] font-[100] text-center focus:outline-none ${
          state?.includes("name")
            ? "bg-[#FFBEBE] text-[#A30000] placeholder:text-[#a3000075]"
            : "bg-white"
        } duration-[400ms]`}
      />
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="PHONE NUMBER"
        className={`w-[391px] h-[64px] border-black/50 border-[.3px] rounded-[6px] font-[100] text-center focus:outline-none ${
          state?.includes("phone")
            ? "bg-[#FFBEBE] text-[#A30000] placeholder:text-[#a3000075]"
            : "bg-white"
        } duration-[400ms]`}
      />
      <textarea
        name="message"
        id="message"
        placeholder="MESSAGE"
        className={`w-[391px] max-w-[391px] min-w-[391px] pl-[10px] pr-[10px] border-black/50 border-[.3px] rounded-[6px] h-[193px] min-h-[193px] max-h-[240px] font-[100] text-center focus:outline-none pt-[10px] ${
          state?.includes("message")
            ? "bg-[#FFBEBE] text-[#A30000] placeholder:text-[#a3000075]"
            : "bg-white"
        } duration-[400ms]`}
      />
      <button className="w-[391px] bg-[#280F01] h-[64px] text-white font-[100] text-[24px] rounded-[6px] rounded-br-[35px] rounded-bl-[35px] border-transparent border-[.3px] hover:bg-white hover:text-[#280F01] hover:border-[#280f01b4] duration-300">
        SUBMIT
      </button>
    </form>
  );
}
