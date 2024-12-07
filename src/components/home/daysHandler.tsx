/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
export default function DaysHandler({
  onhandleDays,
}: {
  onhandleDays: (days: string[]) => void;
}) {
  const weekDays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const [choosedDays, setChoosedDays] = useState<string[]>([]);
  const handleDays = (day: string): void => {
    if (choosedDays.includes(day)) {
      setChoosedDays((prevDays) => prevDays.filter((d) => d !== day));
      onhandleDays(choosedDays.filter((d) => d !== day));
    } else {
      if (day == "All") {
        if (choosedDays.length == 7) {
          setChoosedDays((prevDays) => []);
          onhandleDays([]);
        } else {
          setChoosedDays((prevDays) => weekDays);
          onhandleDays(weekDays);
        }
      } else {
        setChoosedDays((prevDays) => [...prevDays, day]);
        onhandleDays([...choosedDays, day]);
      }
    }
  };
  return (
    <div className="w-[235px] h-[451px] rounded-[9px] bg-[#f8b5386e] relative flex flex-col items-center pt-[18px] gap-[15px]">
      <h1 className="text-[19px] font-[100]">DAYS</h1>
      <div
        className={`w-10/12 rounded-full h-[33px] flex justify-center items-center cursor-pointer border-[1px] border-transparent duration-300 hover:border-[#280f0183] ${
          choosedDays.length == 7 ? "bg-[#02112C] text-white" : "bg-white"
        }
    `}
        onClick={() => handleDays("All")}
      >
        <h1 className={`duration-300`}>All</h1>
      </div>
      {weekDays.map((weekDay, idx) => (
        <div
          key={weekDay}
          className={`flex gap-[15px] w-10/12 rounded-full h-[33px] items-center pl-[10px] cursor-pointer border-[1px] border-transparent duration-300 hover:border-[#280f0183] ${
            choosedDays.includes(weekDay)
              ? "bg-[#02112C] text-white"
              : "bg-white"
          }`}
          onClick={() => handleDays(weekDay)}
        >
          <p
            className={`w-[22px] h-[22px] rounded-full flex justify-center items-center text-[16px] font-[100] duration-300 ${
              choosedDays.includes(weekDay)
                ? "bg-[#FFBC45] text-[#02112C]"
                : "bg-black/10"
            } `}
          >
            {idx + 1}
          </p>
          <h1
            className={`duration-300 ${
              choosedDays.includes(weekDay) ? "text-white" : ""
            }`}
          >
            {weekDay}
          </h1>
        </div>
      ))}
    </div>
  );
}
