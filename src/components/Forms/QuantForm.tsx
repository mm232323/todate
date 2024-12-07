"use client";
import React from "react";
import { useState } from "react";
import { useFormState } from "react-dom";
import { setQuant } from "../../../actions/main";
import Image from "next/image";
export default function QuantForm({ email }: { email: string }) {
  const [state, action] = useFormState(setQuant, []);
  const [choosedDays, setChoosedDays] = useState<string[]>([]);
  const [choosedShape, setChoosedShape] = useState<string>("shape1");
  const [choosedColor, setChoosedColor] = useState<string>("red");
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
        placeholder="QUANTITY TYPE"
        name="quant_type"
        id="quant_type"
        className={`w-[537px] rounded-[15px] border-[1px] font-[100] border-black/30 p-[15px] focus:outline-none duration-[400ms] ${
          state?.includes("type")
            ? "bg-[#FFC6C6] text-[#360000] placeholder:text-[#3600008e]"
            : "bg-white"
        }`}
      />
      <input
        type="number"
        placeholder="QUANTITY CAPACITY"
        name="quant_cap"
        id="quant_cap"
        className={`w-[537px] rounded-[15px] border-[1px] font-[100] border-black/30 p-[15px] focus:outline-none duration-[400ms] ${
          state?.includes("cap")
            ? "bg-[#FFC6C6] text-[#360000] placeholder:text-[#3600008e]"
            : "bg-white"
        }`}
      />
      <select
        name="quant_unit"
        id="quant_unit"
        className={`w-[537px] rounded-[15px] border-[1px] font-[100] border-black/30 p-[15px] focus:outline-none duration-[400ms] ${
          state?.includes("unit")
            ? "bg-[#FFC6C6] text-[#360000] placeholder:text-[#3600008e]"
            : "bg-white"
        }`}
      >
        <option>MEASUREMENT UNIT</option>
        <option>LT</option>
        <option>KG</option>
        <option>GM</option>
        <option>ML</option>
        <option>MT</option>
      </select>
      <div className="flex gap-[15px]">
        <div className="flex gap-[10px] w-[257px] h-[180px] bg-white border-[1px] border-[#280f0180] rounded-[15px] items-center flex-col">
          <h1 className="font-[100] text-[26px] text-black/60 relative top-[15px] mb-[20px]">
            SHAPE
          </h1>
          <div className="flex gap-[20px]">
            <Image
              src="/shape1.svg"
              alt="shape"
              width={48}
              height={48}
              onClick={() => setChoosedShape("shape1")}
              className={`border-[1px] rounded-[10px] ${
                choosedShape == "shape1"
                  ? "border-blue-600"
                  : "border-white duration-300"
              } cursor-pointer`}
            />
            <Image
              src="/shape2.svg"
              alt="shape"
              width={48}
              height={48}
              onClick={() => setChoosedShape("shape2")}
              className={`border-[1px] rounded-[10px] ${
                choosedShape == "shape2"
                  ? "border-blue-600"
                  : "border-white duration-300"
              } cursor-pointer`}
            />
          </div>
        </div>
        <input
          type="text"
          defaultValue={choosedShape}
          name="quant_shape"
          id="quant_shape"
          style={{ display: "none" }}
        />
        <div className="flex gap-[10px] w-[257px] h-[180px] bg-white border-[1px] border-[#280f0180] rounded-[15px] items-center flex-col">
          <h1 className="font-[100] text-[26px] text-black/60 relative top-[15px] mb-[20px]">
            COLOR
          </h1>
          <div className="grid grid-cols-4 grid-rows-2 gap-x-[10px] gap-y-[10px]">
            <div
              className={`${
                choosedColor == "red" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-[#FF3434] rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("red")}
            ></div>
            <div
              className={`${
                choosedColor == "blue" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-blue-600 rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("blue")}
            ></div>
            <div
              className={`${
                choosedColor == "yellow" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-yellow-500 rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("yellow")}
            ></div>
            <div
              className={`${
                choosedColor == "orange" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-orange-500 rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("orange")}
            ></div>
            <div
              className={`${
                choosedColor == "green" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-green-500 rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("green")}
            ></div>
            <div
              className={`${
                choosedColor == "sky" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-sky-500 rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("sky")}
            ></div>
            <div
              className={`${
                choosedColor == "lime" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-lime-500 rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("lime")}
            ></div>
            <div
              className={`${
                choosedColor == "purple" ? "border-blue-600" : "border-[#eee]"
              } w-[51px] h-[44px] bg-indigo-500 rounded-[10px] border-[1px] duration-300 cursor-pointer`}
              onClick={() => setChoosedColor("purple")}
            ></div>
          </div>
        </div>
        <input
          type="text"
          defaultValue={choosedColor}
          name="quant_color"
          id="quant_color"
          style={{ display: "none" }}
        />
      </div>
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
        name="quant_days"
        id="quant_days"
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
