import React from "react";
import Image from "next/image";
import ContactForm from "@/components/Forms/contactForm";
export default function ContactPage() {
  return (
    <>
      <center>
        <div className="w-[682px] h-[682px] rounded-full border-[.4px] border-[#280F01] mb-[100px] relative top-[50px] box-shadow">
          <Image
            src="/fire1.svg"
            alt="fire img"
            width={299}
            height={290}
            className="absolute z-[-10] left-[-50px]"
          />
          <Image
            src="/fire2.svg"
            alt="fire img"
            width={299}
            height={290}
            className="absolute right-[-50px] z-[-10]"
          />
          <Image
            src="/fire3.svg"
            alt="fire img"
            width={299}
            height={290}
            className="absolute bottom-0 left-[-50px] z-[-10]"
          />
          <Image
            src="/fire4.svg"
            alt="fire img"
            width={299}
            height={290}
            className="absolute right-[-50px] bottom-0 z-[-10]"
          />
          <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-[15px]">
            <h1 className="w-[276px] h-[72px] rounded-full font-[100] text-[24px] bg-white flex justify-center items-center border-[.2px] border-[#00000085] relative top-[-20px]">
              CONTACT US
            </h1>
            <ContactForm />
          </div>
        </div>
      </center>
    </>
  );
}
