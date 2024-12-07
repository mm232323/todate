"use client";
import React from "react";
import { quantInput } from "../../../util/types";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { handleQuantComp } from "../../../actions/main";
export default function Quant({
  quant,
  email,
}: {
  quant: quantInput;
  email: string;
}) {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [toggleDetails, setToggleDetails] = useState(false);
  const [comp, setComp] = useState(quant.completed);
  const handleToggle = () => {
    setToggleDetails((prevTog) => !prevTog);
  };
  const handleComp = (increaser: number) => {
    if (
      (comp < +quant.quant_cap && comp > 0) ||
      (comp == +quant.quant_cap && increaser == -1) ||
      (comp == 0 && increaser == 1)
    ) {
      handleQuantComp(email, increaser, quant.quant_id);
      setComp((prevComp) => prevComp + increaser);
    }
  };
  return (
    <div className="flex flex-col w-11/12 rounded-[23px] relative">
      <div
        className={`h-[126px] bg-[#c9c9c9] rounded-[23px] duration-200 flex items-center relative ${
          toggleDetails ? "rounded-bl-none rounded-br-none" : ""
        } `}
      >
        <div
          className={`h-full absolute duration-200 rounded-[23px] bg-gradient-to-r from-sky-500 to-sky-600 ${
            toggleDetails ? "rounded-bl-none rounded-br-none" : ""
          } `}
          style={{ width: (comp * 100) / +quant.quant_cap + "%" }}
        ></div>
        <h1
          className={`font-[600] text-[105px] kode-mono absolute left-[10px] duration-300 ${
            comp == +quant.quant_cap ? "text-black/10" : "text-white/15"
          }`}
        >
          {comp}/{quant.quant_cap}
          {quant.quant_unit}
        </h1>
        <div className="flex gap-[10px] absolute right-[15px] top-[15px]">
          <div className="w-[27px] h-[27px] bg-white flex justify-center items-center rounded-full cursor-pointer">
            <FiPlus color="#280F01" onClick={() => handleComp(1)} />
          </div>
          <div className="w-[27px] h-[27px] bg-white flex justify-center items-center rounded-full cursor-pointer">
            <FiMinus color="#280F01" onClick={() => handleComp(-1)} />
          </div>
        </div>
        <div
          className="cursor-pointer absolute flex gap-[8px] bottom-[15px] right-[15px] items-center"
          onClick={handleToggle}
        >
          <h1 className="font-[100] text-[13px]">
            {toggleDetails ? "hide" : "show"} details
          </h1>
          <TiArrowSortedUp
            color="#280F01"
            size={9}
            className={`duration-200 ${toggleDetails ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      <div
        className={`w-full h-[160px] pt-[15px] rounded-bl-[23px] rounded-br-[23px] mb-[50px] duration-200 top-0 bg-[#02112C] z-[-5] flex flex-col justify-center items-center gap-[25px] ${
          toggleDetails
            ? " opacity-100 blur-0"
            : "rounded-[23px] opacity-0 blur-[10px]"
        }`}
      >
        <div className="flex gap-[20px] relative text-white">
          <h1 className="font-[100]">TYPE: {quant.quant_type}</h1>
          <h1 className="font-[100]">
            CAPACITY: {quant.quant_cap + quant.quant_unit}
          </h1>
          <h1 className="font-[100]">completed: {comp + quant.quant_unit}</h1>
        </div>
        <div className="w-11/12 bg-[#ffffff80] h-[1px] rounded-full relative"></div>
        <div className="flex justify-between w-11/12 mb-[17px]">
          <div className="flex gap-[10px]">
            {weekDays.map((day: string) => (
              <div
                key={day}
                className={`w-[33px] h-[33px] text-[9px] flex justify-center items-center rounded-full ${
                  quant.quant_days.includes(day)
                    ? "text-[#02112C] bg-white"
                    : "text-white bg-white/20"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[33px] h-[33px] rounded-full border-[1px] border-white cursor-pointer flex justify-center items-center duration-300">
              <RiDeleteBinLine color="white" size={13} />
            </div>
            <div className="w-[33px] h-[33px] rounded-full border-[1px] border-white cursor-pointer flex justify-center items-center duration-300">
              <BiEdit color="white" size={13} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
