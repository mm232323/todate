"use client";
import MissionSitter from "@/components/create/MissionSitter";
import QuantSitter from "@/components/create/QuantSitter";
import TodoSitter from "@/components/create/TodoSitter";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { RiWaterPercentFill } from "react-icons/ri";
export default function CreatePage() {
  const [choosedType, setChoosedType] = useState("todo");
  const { data: session } = useSession();
  if (!session) redirect("/login");
  return (
    <>
      <center>
        <div className="text-center w-fit h-fit p-[20px] bg-[#0000000a] rounded-[12px]">
          <h1 className="mb-[10px]">CHOOSE TASK TYPE</h1>
          <div className="flex gap-[50px]">
            <div
              className="cursor-pointer"
              onClick={() => setChoosedType("todo")}
            >
              <FaTasks
                color={choosedType == "todo" ? "#FFB936" : "#C0C0C0"}
                size={58}
                className="duration-300"
              />
              <h1
                className={`font-[100] text-[15px] text-center pt-[5px] ${
                  choosedType == "todo" ? "text-[#FFB936]" : ""
                } duration-300`}
              >
                TODO
              </h1>
            </div>
            <div
              className="cursor-pointer hover:"
              onClick={() => setChoosedType("mission")}
            >
              <FaBusinessTime
                color={choosedType == "mission" ? "#FC5555" : "#C0C0C0"}
                size={58}
                className="duration-300"
              />
              <h1
                className={`font-[100] text-[15px] text-center pt-[5px] ${
                  choosedType == "mission" ? "text-[#FC5555]" : ""
                } duration-300`}
              >
                MISSION
              </h1>
            </div>
            <div
              className="cursor-pointer hover:"
              onClick={() => setChoosedType("quantity")}
            >
              <RiWaterPercentFill
                color={choosedType == "quantity" ? "#1EE135" : "#C0C0C0"}
                size={58}
                className="duration-300"
              />
              <h1
                className={`font-[100] text-[15px] text-center pt-[5px] ${
                  choosedType == "quantity" ? "text-[#1EE135]" : ""
                } duration-300`}
              >
                QUANTITY
              </h1>
            </div>
          </div>
        </div>
      </center>
      <div className="flex gap-[80px] items-center">
        {choosedType == "todo" ? (
          <TodoSitter email={session.user?.email as string} />
        ) : choosedType == "mission" ? (
          <MissionSitter email={session.user?.email as string} />
        ) : (
          <QuantSitter email={session.user?.email as string} />
        )}
        <Image src="/advice.svg" alt="advice img" width={454} height={454} />
      </div>
    </>
  );
}
