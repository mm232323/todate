import Image from "next/image";
import React from "react";
import MissionForm from "../Forms/missionForm";
export default function MissionSitter({ email }: { email: string }) {
  return (
    <div className="relative">
      <Image
        src="/missionBG.svg"
        alt="todo background"
        width={769}
        height={755}
        className="scale-105 relative left-[10px]"
      />
      <MissionForm email={email} />
    </div>
  );
}
