"use client";
import React from "react";
import { missionInput } from "../../../util/types";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit, BiSave } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import { handleDeleteMission, updateMission } from "../../../actions/main";
import { useFormState } from "react-dom";
import { formateTime } from "../../../util/helpers";
export default function Mission({
  mission,
  email,
}: {
  mission: missionInput;
  email: string;
}) {
  const [state, action] = useFormState(updateMission, []);
  const [selectedMission, setSelectedMission] = useState<missionInput>(mission);
  const [toggleStatue, setToggleStatue] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>(
    selectedMission.mission_days.split(",")
  );
  const handleDelete = () => {
    handleDeleteMission(selectedMission.mission_id, email);
    setIsDeleted(true);
  };
  const handleSelectedDays = (day: string) => {
    console.log(selectedDays);
    if (selectedDays.includes(day)) {
      setSelectedDays((prevDays) =>
        prevDays.filter((selDay) => selDay !== day)
      );
    } else {
      setSelectedDays((prevDays) => [...prevDays, day]);
    }
  };
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const startTime = formateTime(selectedMission.start_time);
  const endTime = formateTime(selectedMission.end_time);
  return (
    !isDeleted && (
      <motion.div
        className="flex flex-col gap-[10px] pt-[10px] bg-[#02112C] w-11/12 items-center rounded-[23px]"
        variants={{
          show: { opacity: 1, filter: "blur(0)", y: 0 },
          hide: { opacity: 0, filter: "blur(10px)", y: 20 },
        }}
        initial="hide"
        animate="show"
        exit="hide"
      >
        {toggleStatue == false ? (
          <>
            <div className="w-11/12 flex justify-between text-white items-start">
              <div>
                <h1 className="font-[400] text-[23px]">
                  {selectedMission.mission_name}
                </h1>
                <p className="font-[100] text-[13px] w-[260px] text-justify">
                  {selectedMission.mission_desc}
                </p>
              </div>
              <div className="flex gap-[10px]">
                <div className="flex gap-[3px]">
                  <span className="text-[11px] font-[100] opacity-[.6]">
                    FROM
                  </span>{" "}
                  <h1 className="font-[600] text-[23px]">{startTime}</h1>
                </div>
                <div className="flex gap-[3px]">
                  <span className="text-[11px] font-[100] opacity-[.6]">
                    TO
                  </span>{" "}
                  <h1 className="font-[600] text-[23px]">{endTime}</h1>
                </div>
              </div>
            </div>
            <div className="w-11/12 bg-[#ffffff80] h-[1px] rounded-full relative"></div>
            <div className="flex justify-between w-11/12 mb-[17px]">
              <div className="flex gap-[10px] pt-[8px]">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className={`w-[33px] h-[33px] text-[9px] flex justify-center items-center rounded-full ${
                      selectedDays.includes(day)
                        ? "text-[#02112C] bg-white"
                        : "text-white bg-white/20"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="flex gap-[10px] pt-[8px]">
                <div
                  className="w-[33px] h-[33px] rounded-full border-[1px] border-white cursor-pointer flex justify-center items-center duration-300"
                  onClick={handleDelete}
                >
                  <RiDeleteBinLine color="white" size={13} />
                </div>
                <div
                  className="w-[33px] h-[33px] rounded-full border-[1px] border-white cursor-pointer flex justify-center items-center duration-300"
                  onClick={() => setToggleStatue(true)}
                >
                  <BiEdit color="white" size={13} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <form action={action}>
            <div className="w-11/12 flex justify-between text-white items-start">
              <div className="mb-[10px]">
                <input
                  className={`pl-[6px] font-[400] text-[23px] bg-transparent focus:outline-none border-[1px] w-[200px] rounded-[6px] duration-300 ${
                    state?.includes("name")
                      ? "text-red-200 border-red-400"
                      : "text-white border-white/50"
                  }`}
                  defaultValue={selectedMission.mission_name}
                  name="mission_name"
                  type="text"
                />
                <input
                  className={`pl-[6px]  font-[100] text-[13px] w-[200px] rounded-[6px] text-justify bg-transparent focus:outline-none border-[1px] duration-300 ${
                    state?.includes("desc")
                      ? "text-red-200 border-red-400"
                      : "text-white border-white/50"
                  }`}
                  type="text"
                  defaultValue={selectedMission.mission_desc}
                  name="mission_desc"
                />
              </div>
              <div className="flex gap-[10px]">
                <div className="flex gap-[3px]">
                  <span className="text-[11px] font-[100] opacity-[.6]">
                    FROM
                  </span>{" "}
                  <input
                    type="text"
                    className={`font-[600] text-[23px] border-[1px] rounded-[8px] bg-transparent focus:outline-none w-[120px] pl-[5px] duration-300 ${
                      state?.includes("start_time")
                        ? "text-red-200 border-red-400"
                        : "text-white border-white/50"
                    }`}
                    defaultValue={startTime}
                    name="start_time"
                  />
                </div>
                <div className="flex gap-[3px]">
                  <span className="text-[11px] font-[100] opacity-[.6]">
                    TO
                  </span>{" "}
                  <input
                    type="text"
                    className={`font-[600] text-[23px] border-[1px] rounded-[8px] bg-transparent focus:outline-none w-[120px] pl-[5px] duration-300 ${
                      state?.includes("end_time")
                        ? "text-red-200 border-red-400"
                        : "text-white border-white/50"
                    }`}
                    defaultValue={endTime}
                    name="end_time"
                  />
                </div>
              </div>
            </div>
            <div className="w-11/12 bg-[#ffffff80] h-[1px] rounded-full relative mb-[7px]"></div>
            <div className="flex justify-between w-11/12 mb-[17px]">
              <div className="flex gap-[10px] pt-[8px]">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className={`w-[33px] h-[33px] text-[9px] flex justify-center border-[1px] items-center cursor-pointer rounded-full ${
                      selectedDays.includes(day)
                        ? "text-[#02112C] bg-white"
                        : "text-white bg-white/20"
                    } duration-300 ${
                      state?.includes("days")
                        ? "border-red-400"
                        : "border-white/20"
                    }`}
                    onClick={() => handleSelectedDays(day)}
                  >
                    {day}
                  </div>
                ))}
                <input
                  type="text"
                  value={selectedDays.join(",")}
                  style={{ display: "none" }}
                  name="mission_days"
                />
              </div>
              <input
                type="text"
                defaultValue={email}
                style={{ display: "none" }}
                name="email"
              />
              <input
                type="text"
                defaultValue={selectedMission.mission_id}
                name="mission_id"
                style={{ display: "none" }}
              />
              <div className="flex gap-[10px] pt-[8px]">
                <div
                  className="w-[33px] h-[33px] rounded-full border-[1px] border-white cursor-pointer flex justify-center items-center duration-300"
                  onClick={handleDelete}
                >
                  <RiDeleteBinLine color="white" size={13} />
                </div>
                <button
                  className="w-[33px] h-[33px] rounded-full border-[1px] border-white cursor-pointer flex justify-center items-center duration-300"
                  onClick={() => setToggleStatue(false)}
                >
                  <BiSave color="white" size={13} />
                </button>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    )
  );
}
