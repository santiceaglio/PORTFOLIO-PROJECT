import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

function AboutButton() {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        className="relative w-[185px] h-[185px] flex justify-center items-center  bg-circleStar bg-no-repeat bg-cover bg-center group"
        href={"/pages/about"}
        prefetch={false}
      >
        <Image
          src={"/aboutme1.svg"}
          width={148}
          height={148}
          alt="About me"
          className="animate-spin-slow  w-full h-full max-w-[160px] max-h-[160px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
}

export default AboutButton;
