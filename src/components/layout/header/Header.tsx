import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex p-[20px] w-full justify-between">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt=""
          width={68}
          height={68}
          className="p-[5px] w-[90px] h-[80px] rounded-[14px] bg-black/5 "
        />
      </Link>
      <div className="flex gap-[6px]">
        <Image
          src="/stack.svg"
          alt=""
          width={22}
          height={22}
          className="hover:scale-110 duration-300 cursor-pointer"
        />
        <Image
          src="/linkedin.svg"
          alt=""
          width={22}
          height={22}
          className="hover:scale-110 duration-300 cursor-pointer"
        />
        <Image
          src="/github.svg"
          alt=""
          width={22}
          height={22}
          className="hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
}
