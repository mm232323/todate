/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useRef } from "react";
import { userInput } from "../../../util/types";
import { MdEdit } from "react-icons/md";
import { useFormState } from "react-dom";
import { updateProps } from "../../../actions/main";
export default function Properties({ user }: { user: userInput }) {
  const [state, action] = useFormState(updateProps, []);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const jobRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [properties, setProperties] = useState({
    name: user.name,
    phone: user.phone,
    job: user.job,
    gender: user.gender,
  });
  const [type, setType] = useState("show");
  const handleUpdate = () => {
    buttonRef.current?.click();
    if (
      nameRef.current!.value.length! < 5 ||
      phoneRef.current?.value.length !== 11
    )
      return;
    setType("show");
    const updatedProps = {
      name: nameRef.current?.value,
      phone: phoneRef.current?.value,
      job: jobRef.current?.value,
      gender: genderRef.current?.value,
    };
    setProperties(
      (_prevProps) =>
        updatedProps as {
          name: string;
          phone: string;
          job: string;
          gender: string;
        }
    );
  };
  return (
    <div>
      {type == "show" ? (
        <>
          <h1 className="font-[100] text-[35px]">NAME</h1>
          <span className="font-[100] text-[20px] text-black/60 pl-[5px]">
            {properties.name?.toUpperCase()}{" "}
          </span>
          <h1 className="font-[100] text-[35px]">PHONE NUMBER</h1>
          <span className="font-[100] text-[20px] text-black/60 pl-[5px]">
            {properties.phone}
          </span>
          <h1 className="font-[100] text-[35px]">JOB TITLE</h1>
          <span className="font-[100] text-[20px] text-black/60 pl-[5px]">
            {properties.job === ""
              ? "not sitted"
              : properties.job.toUpperCase()}{" "}
          </span>
          <h1 className="font-[100] text-[35px]">GENDER</h1>
          <h3 className="font-[100] text-[20px] text-black/60 pl-[5px]">
            {properties.gender.toUpperCase()}{" "}
          </h3>
          <MdEdit
            size={22}
            color="#200E04"
            className="opacity-70 duration-300 hover:opacity-100 cursor-pointer relative top-[20px]"
            onClick={() => setType("edit")}
          />
        </>
      ) : (
        <form action={action}>
          <h1 className="font-[100] text-[35px]">NAME</h1>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            className={`w-[312px] h-[37px] rounded-[6px] border-[#200e0481] border-[.3px] duration-300 mb-[10px] text-black/75 pl-[8px] focus:outline-none ${
              state?.includes("name") ? "bg-[#FFC7C7]" : "bg-white"
            }`}
            defaultValue={properties.name}
          />
          <h1 className="font-[100] text-[35px]">PHONE NUMBER</h1>
          <input
            type="text"
            name="phone"
            id="phone"
            ref={phoneRef}
            className={`w-[312px] h-[37px] rounded-[6px] border-[#200e0481] border-[.3px] duration-300 mb-[10px] text-black/75 pl-[8px] focus:outline-none ${
              state?.includes("phone") ? "bg-[#FFC7C7]" : "bg-white"
            }`}
            defaultValue={properties.phone}
          />
          <h1 className="font-[100] text-[35px]">JOB TITLE</h1>
          <input
            type="text"
            name="job"
            id="job"
            ref={jobRef}
            className="w-[312px] h-[37px] rounded-[6px] border-[#200e0481] border-[.3px] bg-white mb-[10px] text-black/75 pl-[8px] focus:outline-none"
            defaultValue={properties.job}
          />
          <input
            type="text"
            name="email"
            id="email"
            style={{ display: "none" }}
            defaultValue={user.email}
          />
          <h1 className="font-[100] text-[35px]">GENDER</h1>
          <select
            className="w-[312px] h-[37px] rounded-[6px] border-[#200e0481] border-[.3px] bg-white mb-[5px] text-black/75 pl-[8px] focus:outline-none"
            name="gender"
            id="gender"
            ref={genderRef}
            defaultValue={properties.gender}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
          <button
            onClick={handleUpdate}
            ref={buttonRef}
            className="bg-white w-fit h-fit p-[11px] rounded-[6px] border-[.5px] border-[#200e049d] relative top-[20px] hover:bg-[#200e04] hover:text-white duration-[350ms] block"
          >
            SAVE
          </button>
        </form>
      )}
    </div>
  );
}
