import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Header from "@/components/layout/header/Header";
export default async function AboutPage() {
  const { user } = (await getServerSession()) as {
    user: { email: string; password: string };
  };
  return (
    <>
      <center>
        <Image
          src="/largeIco.svg"
          alt="large logo"
          width={601.71}
          height={416}
          className="relative top-[60px] h-fit"
        />
        <section className="flex gap-[20px] relative top-[120px] justify-center items-center">
          <p className="w-[605px] font-[100] text-[20px] text-justify tracking-[3.6px]">
            Are you in search of the perfect website to help you set daily
            to-dos and stay organized with your tasks? Look no further than
            &quot;Todate&quot;! Our website is designed with your needs in mind,
            providing you with the tools and resources to easily plan and track
            your daily missions. At &quot;Todate&quot;,<br></br>
            <br></br>
            we understand the importance of staying on top of your tasks and
            achieving your goals. That&apos;s why we have created a
            user-friendly platform that makes it easy for you to set,
            prioritize, and complete your daily to-dos. With features such as
            reminders, deadlines, and progress tracking, you can stay focused
            and motivated to accomplish everything on your list. Don&apos;t let
            your tasks overwhelm you any longer. Take control of your day and
            maximize your productivity with &quot;Todate&quot;.
          </p>
          <Image
            src="/about_img.png"
            alt="about img"
            width={615}
            height={614}
          />
        </section>
        <section className="flex gap-[5px] relative top-[180px] justify-center items-center">
          <Image
            src="/teamwork.png"
            alt="teamwork"
            width={812}
            height={432}
            className="rounded-[43px]"
          />
          <Image
            src="/about_img2.png"
            alt="about img 2"
            width={329}
            height={479}
          />
        </section>
        <p className="relative top-[200px] font-[100] text-[20px] w-[605px] text-center">
          the hard work and dedication that everyone has put into improving the
          performance of our website &quot;Todate&quot;. Your teamwork has truly
          paid off, and we are seeing great results in terms of user experience
          and efficiency.
        </p>
        {user == null ? (
          <Link href="/signup">
            <button className="w-[320px] h-[73px] rounded-[11px] bg-[#240E02] font-[100] text-[19px] relative top-[220px] text-white">
              SIGN UP NOW!
            </button>
          </Link>
        ) : (
          <Link href="/profile">
            <button className="w-[320px] h-[73px] rounded-[11px] bg-[#240E02] font-[100] text-[19px] relative top-[220px] text-white hover:bg-white hover:text-[#240e02] duration-[400ms] border-transparent hover:border-[#230e02] border-[.3px]">
              GO TO PROFILE
            </button>
          </Link>
        )}
        <footer className="relative top-[250px]">
          <Header />
        </footer>
      </center>
    </>
  );
}
