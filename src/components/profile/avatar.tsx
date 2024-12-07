/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { getAvatar, setAvatar } from "../../../actions/main";
export default function Avatar() {
  const { data: session } = useSession();
  const email = session?.user?.email as string;
  const [avatarName, setAvatarName] = useState("");
  useEffect(() => {
    const handleAvatar = async () => {
      if (email) {
        setAvatarName(await getAvatar(email));
      }
    };
    handleAvatar();
  }, [email]);
  const [_, action] = useFormState(setAvatar, null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="flex justify-center align-center w-[120px] h-[119px] rounded-full overflow-hidden bg-[#eee]">
      <Image
        src={
          avatarName.length
            ? `${process.env.SERVER_HOST}/${avatarName}`
            : "/avatar.svg"
        }
        alt="avatar img"
        width={125}
        height={125}
      />
      <form action={action}>
        <input
          type="file"
          accept="image/*"
          id="avatar"
          name="avatar"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={() => buttonRef.current?.click()}
        />
        <input
          type="text"
          id="email"
          name="email"
          defaultValue={email}
          style={{ display: "none" }}
        />
        <button style={{ display: "none" }} ref={buttonRef}></button>
      </form>
      <div
        className="bg-black/65 w-[120px] h-[120px] rounded-full flex justify-center items-center absolute z-10 opacity-0 hover:opacity-100 duration-[350ms] cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        <RxAvatar size={30} color="white" />
      </div>
    </div>
  );
}
