"use client";
import React from "react";
import { useState } from "react";
import { useFormState } from "react-dom";
import { setMission } from "../../../actions/main";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
export default function MissionForm({ email }: { email: string }) {
  const [state, action] = useFormState(setMission, []);
  const [startTime, setStartTime] = useState({
    hour: "12",
    minute: "00",
    time: "AM",
  });

  const [endTime, setEndTime] = useState({
    hour: "12",
    minute: "00",
    time: "AM",
  });
  const [choosedDays, setChoosedDays] = useState<string[]>([]);
  const setZero = (num: number): string => {
    if (num < 10) {
      return "0" + num;
    }
    return String(num);
  };
  const handleStartTime = (time: string, type: string, sum: number) => {
    if (type == "hour") {
      setStartTime((prevTime) => {
        let newTime = time;
        if (sum == 1) {
          if (+time == 12) {
            newTime = "01";
          } else {
            newTime = setZero(+time + 1);
          }
        } else {
          if (+time == 1) {
            newTime = "12";
          } else {
            newTime = setZero(+time - 1);
          }
        }
        return { ...prevTime, hour: newTime };
      });
    } else if (type == "minute") {
      setStartTime((prevTime) => {
        let newTime = time;
        if (sum == 1) {
          if (+time == 59) {
            newTime = "00";
          } else {
            newTime = setZero(+time + 1);
          }
        } else {
          if (+time == 0) {
            newTime = "59";
          } else {
            newTime = setZero(+time - 1);
          }
        }
        return { ...prevTime, minute: newTime };
      });
    } else {
      setStartTime((prevTime) => {
        if (time == "AM") return { ...prevTime, time: "PM" };
        return { ...prevTime, time: "AM" };
      });
    }
  };
  const handleEndTime = (time: string, type: string, sum: number) => {
    if (type == "hour") {
      setEndTime((prevTime) => {
        let newTime = time;
        if (sum == 1) {
          if (+time == 12) {
            newTime = "01";
          } else {
            newTime = setZero(+time + 1);
          }
        } else {
          if (+time == 1) {
            newTime = "12";
          } else {
            newTime = setZero(+time - 1);
          }
        }
        return { ...prevTime, hour: newTime };
      });
    } else if (type == "minute") {
      setEndTime((prevTime) => {
        let newTime = time;
        if (sum == 1) {
          if (+time == 59) {
            newTime = "00";
          } else {
            newTime = setZero(+time + 1);
          }
        } else {
          if (+time == 0) {
            newTime = "59";
          } else {
            newTime = setZero(+time - 1);
          }
        }
        return { ...prevTime, minute: newTime };
      });
    } else {
      return setEndTime((prevTime) => {
        if (time == "AM") return { ...prevTime, time: "PM" };
        return { ...prevTime, time: "AM" };
      });
    }
  };
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
        placeholder="MISSION NAME"
        name="mission_name"
        id="mission_name"
        className={`w-[537px] rounded-[15px] border-[1px] font-[100] border-black/30 p-[15px] focus:outline-none duration-[400ms] ${
          state?.includes("name")
            ? "bg-[#FFC6C6] text-[#360000] placeholder:text-[#3600008e]"
            : "bg-white"
        }`}
      />
      <textarea
        placeholder="MISSION DESCRIPTION"
        name="mission_desc"
        id="mission_desc"
        className={`w-[537px] max-h-[115px] min-h-[90px] rounded-[15px] border-[1px] font-[100] border-black/30 p-[15px] focus:outline-none max-w-[537px] duration-[400ms] ${
          state?.includes("desc")
            ? "bg-[#FFC6C6] text-[#360000] placeholder:text-[#3600008e]"
            : "bg-white"
        }`}
      />
      <div className="flex gap-[15px]">
        <div className="flex gap-[10px] w-[257px] h-[142px] bg-white border-[1px] border-[#280f0180] rounded-[15px]">
          <h1 className="text-[37px] font-[500] text-black/15 rotate-[-90deg] relative left-[15px]">
            FROM
          </h1>
          <div className="flex flex-col items-center relative left-[-50px]">
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+startTime.hour == 1 ? "12" : setZero(+startTime.hour - 1)}
            </p>
            <h1 className="font-[100] text-[40px]">{startTime.hour}</h1>
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+startTime.hour == 12 ? "01" : setZero(+startTime.hour + 1)}
            </p>
            <div className="flex gap-[5px] items-center">
              <FaCaretDown
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleStartTime(startTime.hour, "hour", -1)}
              />
              <FaCaretUp
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleStartTime(startTime.hour, "hour", 1)}
              />
            </div>
          </div>
          <p className="relative left-[-50px] self-center font-[500]">:</p>
          <div className="flex flex-col items-center relative left-[-50px]">
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+startTime.minute == 0 ? "59" : setZero(+startTime.minute - 1)}
            </p>
            <h1 className="font-[100] text-[40px]">{startTime.minute}</h1>
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+startTime.minute == 59 ? "01" : setZero(+startTime.minute + 1)}
            </p>
            <div className="flex gap-[5px] items-center">
              <FaCaretDown
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleStartTime(startTime.minute, "minute", -1)}
              />
              <FaCaretUp
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleStartTime(startTime.minute, "minute", 1)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center relative left-[-40px] self-center">
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {startTime.time == "AM" ? "PM" : "AM"}
            </p>
            <h1 className="font-[100] text-[30px]">{startTime.time}</h1>
            <div className="flex gap-[5px] items-center">
              <FaCaretDown
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleStartTime(startTime.time, "time", 0)}
              />
              <FaCaretUp
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleStartTime(startTime.time, "time", 0)}
              />
            </div>
          </div>
        </div>
        <input
          type="text"
          value={startTime.hour + "_" + startTime.minute + "_" + startTime.time}
          style={{ display: "none" }}
          name="start_time"
          id="start_time"
        />
        <div className="flex gap-[10px] w-[257px] h-[142px] bg-white border-[1px] border-[#280f0180] rounded-[15px]">
          <h1 className="text-[37px] font-[500] text-black/15 rotate-[-90deg] relative left-[40px]">
            TO
          </h1>
          <div className="flex flex-col items-center relative">
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+endTime.hour == 1 ? "12" : setZero(+endTime.hour - 1)}
            </p>
            <h1 className="font-[100] text-[40px]">{endTime.hour}</h1>
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+endTime.hour == 12 ? "01" : setZero(+endTime.hour + 1)}
            </p>
            <div className="flex gap-[5px] items-center">
              <FaCaretDown
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleEndTime(endTime.hour, "hour", -1)}
              />
              <FaCaretUp
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleEndTime(endTime.hour, "hour", 1)}
              />
            </div>
          </div>
          <p className="relative self-center font-[500]">:</p>
          <div className="flex flex-col items-center relative">
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+endTime.minute == 0 ? "59" : setZero(+endTime.minute - 1)}
            </p>
            <h1 className="font-[100] text-[40px]">{endTime.minute}</h1>
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {+endTime.minute == 59 ? "01" : setZero(+endTime.minute + 1)}
            </p>
            <div className="flex gap-[5px] items-center">
              <FaCaretDown
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleEndTime(endTime.minute, "minute", -1)}
              />
              <FaCaretUp
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleEndTime(endTime.minute, "minute", 1)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center relative self-center">
            <p className="font-[400] text-[#280f0171] text-[20px]">
              {endTime.time == "AM" ? "PM" : "AM"}
            </p>
            <h1 className="font-[100] text-[30px]">{endTime.time}</h1>
            <div className="flex gap-[5px] items-center">
              <FaCaretDown
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleEndTime(endTime.time, "time", 0)}
              />
              <FaCaretUp
                color="#280F01"
                size={11}
                cursor="pointer"
                className="hover:scale-105 duration-300"
                onClick={() => handleEndTime(endTime.time, "time", 0)}
              />
            </div>
          </div>
        </div>
        <input
          type="text"
          value={`${endTime.hour}_${endTime.minute}_${endTime.time}`}
          style={{ display: "none" }}
          name="end_time"
          id="end_time"
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
        name="mission_days"
        id="mission_days"
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
        ADD MISSION
      </button>
    </form>
  );
}
