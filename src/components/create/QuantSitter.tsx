import Image from "next/image";
import React from "react";
import QuantForm from "../Forms/QuantForm";
export default function QuantSitter({ email }: { email: string }) {
  return (
    <div className="relative">
      <Image
        src="/quantBG.svg"
        alt="todo background"
        width={769}
        height={755}
        className="scale-105 relative left-[10px]"
      />
      <QuantForm email={email} />
    </div>
  );
}
