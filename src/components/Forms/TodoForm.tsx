"use client";
import React from "react";
import { useState } from "react";
import { useFormState } from "react-dom";
import { setTodo } from "../../../actions/main";
export default function TodoForm({ email }: { email: string }) {
  const [state, action] = useFormState(setTodo, []);
  const [choosedDays, setChoosedDays] = useState<string[]>([]);
  const setDay = (choosedDay: string) => {
    if (choosedDays.includes(choosedDay)) {
      setChoosedDays((prevDays) =>
        prevDays.filter((day) => day !== choosedDay)
      );
    } else {
      setChoosedDays((prevDays) => [...prevDays, choosedDay]);
    }
  };
  return (
    <form
      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[15px]"
      action={action}
    >
      <input
        type="text"
        placeholder="TODO NAME"
        name="todo_name"
        id="todo_name"
        className={`w-[537px] rounded-[15px] border-[1px] font-[100] border-black/30 p-[15px] focus:outline-none duration-[400ms] ${
          state?.includes("name")
            ? "bg-[#FFC6C6] text-[#360000] placeholder:text-[#3600008e]"
            : "bg-white"
        }`}
      />
      <div
        className={`w-[537px] h-[145px] rounded-[15px] border-[.4px] border-black/30 duration-[400ms] ${
          state?.includes("days") ? "bg-[#FFC6C6]" : "bg-white"
        }`}
      >
        <h1 className="text-center font-[100] text-[26px] relative top-[10px]">
          DAYS
        </h1>
        <div className="flex gap-[20px] left-1/2 translate-x-[-50%] relative top-[20px] w-fit">
          <h1
            className={`w-[50px] h-[50px] font-[100] duration-300 flex justify-center items-center border-[1px] border-[#280F01] p-[20px] rounded-full text-[15px] cursor-pointer ${
              choosedDays.includes("SUN")
                ? "bg-[#280f01] text-white"
                : "bg-transparent text-[#280f01]"
            }`}
            onClick={() => setDay("SUN")}
          >
            SUN
          </h1>
          <h1
            className={`w-[50px] h-[50px] font-[100] duration-300 flex justify-center items-center border-[1px] border-[#280F01] p-[20px] rounded-full text-[15px] cursor-pointer ${
              choosedDays.includes("MON")
                ? "bg-[#280f01] text-white"
                : "bg-transparent text-[#280f01]"
            }`}
            onClick={() => setDay("MON")}
          >
            MON
          </h1>
          <h1
            className={`w-[50px] h-[50px] font-[100] duration-300 flex justify-center items-center border-[1px] border-[#280F01] p-[20px] rounded-full text-[15px] cursor-pointer ${
              choosedDays.includes("TUE")
                ? "bg-[#280f01] text-white"
                : "bg-transparent text-[#280f01]"
            }`}
            onClick={() => setDay("TUE")}
          >
            TUE
          </h1>
          <h1
            className={`w-[50px] h-[50px] font-[100] duration-300 flex justify-center items-center border-[1px] border-[#280F01] p-[20px] rounded-full text-[15px] cursor-pointer ${
              choosedDays.includes("WED")
                ? "bg-[#280f01] text-white"
                : "bg-transparent text-[#280f01]"
            }`}
            onClick={() => setDay("WED")}
          >
            WED
          </h1>
          <h1
            className={`w-[50px] h-[50px] font-[100] duration-300 flex justify-center items-center border-[1px] border-[#280F01] p-[20px] rounded-full text-[15px] cursor-pointer ${
              choosedDays.includes("THU")
                ? "bg-[#280f01] text-white"
                : "bg-transparent text-[#280f01]"
            }`}
            onClick={() => setDay("THU")}
          >
            THU
          </h1>
          <h1
            className={`w-[50px] h-[50px] font-[100] duration-300 flex justify-center items-center border-[1px] border-[#280F01] p-[20px] rounded-full text-[15px] cursor-pointer ${
              choosedDays.includes("FRI")
                ? "bg-[#280f01] text-white"
                : "bg-transparent text-[#280f01]"
            }`}
            onClick={() => setDay("FRI")}
          >
            FRI
          </h1>
          <h1
            className={`w-[50px] h-[50px] font-[100] duration-300 flex justify-center items-center border-[1px] border-[#280F01] p-[20px] rounded-full text-[15px] cursor-pointer ${
              choosedDays.includes("SAT")
                ? "bg-[#280f01] text-white"
                : "bg-transparent text-[#280f01]"
            }`}
            onClick={() => setDay("SAT")}
          >
            SAT
          </h1>
        </div>
      </div>
      <input
        type="text"
        defaultValue={String(choosedDays)}
        name="todo_days"
        id="todo_days"
        style={{ display: "none" }}
      />
      <input
        type="text"
        defaultValue={email}
        style={{ display: "none" }}
        name="email"
        id="email"
      />
      <button className="w-[537px] h-[65px] rounded-[15px] bg-[#00C99B] text-white border-[1px] border-[#280f0173] font-[100] text-[24px] hover:text-[#00C99B] hover:bg-white duration-300">
        ADD TODO
      </button>
    </form>
  );
}
