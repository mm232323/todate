import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Avatar from "@/components/profile/avatar";
import { userInput } from "../../../util/types";
import Properties from "@/components/profile/properties";
import { BiSolidAward } from "react-icons/bi";
export default async function ProfilePage() {
  const session = await getServerSession();
  if (session?.user == null) redirect("/signup");
  const response = await fetch(
    `${process.env.SERVER_HOST}/get-user/${session.user.email}`
  );
  const user = (await response.json()) as userInput;
  const awards = [];
  for (let i = 1; i <= 8; i++) {
    awards.push(
      <BiSolidAward
        color={user.awards >= i ? "#280F01" : "#280f011f"}
        size={85.005}
      />
    );
  }
  return (
    <>
      <div className="w-[125px] h-[125px] rounded-full bg-[#EBEBEB] flex justify-center items-center border-[4px] border-white relative top-[45px] left-1/2 translate-x-[-50%]">
        <Avatar />
      </div>
      <div className="w-10/12 h-[519px] flex bg-[#0000000e] rounded-[32px] gap-[80px] mb-[50px] justify-center items-center relative left-1/2 translate-x-[-50%]">
        <Properties user={user} />
        <div>
          <h1 className="font-[100] text-[35px] mb-[20px]">BADGETS</h1>
          <div className="grid grid-rows-2 grid-cols-4 relative left-[-20px] w-fit h-fit">
            {awards.map((award, idx) => (
              <div key={idx} className="w-fit h-fit">
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
