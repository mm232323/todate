"use client";
import React from "react";
import { useFormState } from "react-dom";
import { signup } from "../../../actions/auth";
import { AnimatePresence, motion } from "framer-motion";
export default function SignupForm() {
  const [state, action] = useFormState(signup, []);
  return (
    <form
      action={action}
      className="absolute z-20 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"
    >
      <input
        placeholder="FULL NAME"
        id="name"
        name="name"
        className={`w-[548px] h-[53px] border-[.4px]  rounded-[9px]  pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
          state?.includes("name")
            ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
            : "bg-white border-[#280f0186]"
        }`}
      />
      <input
        placeholder="PHONE NUMBER"
        id="phone"
        name="phone"
        type="number"
        className={`w-[548px] h-[53px] border-[.4px]  rounded-[9px]  pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
          state?.includes("phone")
            ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
            : "bg-white border-[#280f0186]"
        }`}
      />
      <div className="flex gap-[8px] mb-[10px]">
        <select
          className={`w-[174px] h-[53px] border-[.4px] rounded-[9px] pl-[20px] pr-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] font-family ${
            state?.includes("gender")
              ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
              : "bg-white border-[#280f0186]"
          }`}
          name="gender"
          id="gender"
        >
          <option className="text-[#280f01d3] font-family">Gender</option>
          <option className="text-[#280f01d3] font-family">Male</option>
          <option className="text-[#280f01d3] font-family">Female</option>
        </select>
        <input
          placeholder="JOB TITLE"
          id="job"
          name="job"
          className={`w-[366px] h-[53px] border-[.4px] rounded-[9px] pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
            state?.includes("job")
              ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
              : "bg-white border-[#280f0186]"
          }`}
        />
      </div>
      <input
        placeholder="EMAIL"
        id="email"
        name="email"
        type="email"
        className={`w-[548px] h-[53px] border-[.4px] rounded-[9px] pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
          state?.includes("email")
            ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
            : "bg-white border-[#280f0186]"
        }`}
      />
      <input
        placeholder="PASSWORD (6 - 18 letters)"
        id="password"
        name="password"
        type="password"
        className={`w-[548px] h-[53px] border-[.4px] rounded-[9px] pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
          state?.includes("password")
            ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
            : "bg-white border-[#280f0186]"
        }`}
      />
      <input
        placeholder="RE-TYPE PASSWORD"
        id="repassword"
        name="repassword"
        type="password"
        className={`w-[548px] h-[53px] border-[.4px] rounded-[9px] pl-[20px] duration-300 focus:outline-none focus:border-[#280f01c5] placeholder:text-black/50 text-[20px] font-[100] mb-[10px] ${
          state?.includes("repassword")
            ? "bg-[#FFCDCD] border-[#B80000] border-[1px]"
            : "border-[#280f0186] bg-white"
        }`}
      />
      <button className="font-family text-[#280f01] w-[548px] h-[60px] font-[100] text-[30px] border-[#280f01] border-[.3px] rounded-[9px] linear-gradient">
        SIGN UP
      </button>
      <AnimatePresence>
        {state?.length && (
          <motion.p
            variants={{
              show: { opacity: 1, filter: "blur(0)", x: 0 },
              hide: { opacity: 0, filter: "blur(10px)", x: -20 },
            }}
            initial="hide"
            animate="show"
            exit="hide"
            className="text-[#b80000] text-[15px]"
          >
            all fields should be valid
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
