"use client";
import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { getAvatar } from "../../../../actions/main";

interface PagesHeaderProps {
  isAuthed: boolean;
  serverHost: string;
}

const PagesHeader: React.FC<PagesHeaderProps> = ({ isAuthed, serverHost }) => {
  const path = usePathname();
  const { data: session } = useSession();
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    const handleAvatar = async () => {
      if (session?.user?.email) {
        const avatar = await getAvatar(session.user.email);
        setAvatar(avatar);
      }
    };
    handleAvatar();
  }, [session?.user?.email]);

  return (
    <div className="flex w-full justify-between p-[10px] pl-[20px] pr-[20px] mb-[20px]">
      {session?.user ? (
        <div
          className="w-[56px] h-[56px] bg-[#0000000c] rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => signOut()}
        >
          <LuLogOut size={21.5} color="#200d01" />
        </div>
      ) : (
        <Link href="/login">
          <div
            className={`w-[56px] h-[56px] rounded-full ${
              path !== "/login"
                ? "bg-[#0000000c]"
                : "bg-[#200d01] cursor-default"
            } flex justify-center items-center`}
          >
            <LuLogIn
              size={21.5}
              color={path !== "/login" ? "#200d01" : "white"}
            />
          </div>
        </Link>
      )}

      <div className="p-[20px] pl-[40px] pr-[40px] bg-[#0000000c] flex gap-[18px] justify-center items-center rounded-full">
        {isAuthed && (
          <>
            <Link href="/">
              <h1
                className={`cursor-pointer hover:scale-105 duration-300 w-fit h-fit font-[100] ${
                  path === "/"
                    ? "p-[8px] rounded-full bg-[#240E02] text-white"
                    : ""
                }`}
              >
                dashboard
              </h1>
            </Link>
            <Link href="/create">
              <h1
                className={`cursor-pointer hover:scale-105 duration-300 w-fit h-fit font-[100] ${
                  path === "/create"
                    ? "p-[8px] rounded-full bg-[#240E02] text-white"
                    : ""
                }`}
              >
                create
              </h1>
            </Link>
          </>
        )}
        <Link href="/about">
          <h1
            className={`cursor-pointer hover:scale-105 duration-300 w-fit h-fit font-[100] ${
              path === "/about"
                ? "p-[8px] rounded-full bg-[#240E02] text-white"
                : ""
            }`}
          >
            about
          </h1>
        </Link>
        <Link href="/contact">
          <h1
            className={`cursor-pointer hover:scale-105 duration-300 w-fit h-fit font-[100] ${
              path === "/contact"
                ? "p-[8px] rounded-full bg-[#240E02] text-white"
                : ""
            }`}
          >
            contact
          </h1>
        </Link>
      </div>
      {session?.user ? (
        <Link href="/profile">
          <div
            className={`w-[56px] h-[56px] bg-[#0000000c] border-[1px] rounded-full ${
              path === "/profile" ? "border-blue-600" : "border-transparent"
            } flex justify-center items-center`}
          >
            <Image
              src={avatar ? `${serverHost}/${avatar}` : "/avatar.svg"}
              alt="avatar img"
              width={41.5}
              height={41.5}
              className="rounded-full"
            />
          </div>
        </Link>
      ) : (
        <Link href="/signup">
          <div
            className={`w-[56px] h-[56px] rounded-full ${
              path !== "/signup"
                ? "bg-[#0000000c]"
                : "bg-[#200d01] cursor-default"
            } flex justify-center items-center`}
          >
            <FaUserPlus
              size={20.3}
              color={path !== "/signup" ? "#200d01" : "white"}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default PagesHeader;
