"use client";
import AboutButton from "./circleHome";
import ParticlesContainer from "./particlesContainer";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/variants";
import Profile from "./Profile"

export default function HomeClient() {
  return (
    <>
      <div className="container h-full w-full z-20">
        <div className="flex flex-row justify-center w-screen h-screen">
          <div className="flex flex-col-reverse sm:flex-row justify-end md:justify-normal items-center w-full p-[10px] m-[15px]">
            <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto z-10">
              <motion.h1 variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1">Full<span className="text-newred">Stack</span> Developer</motion.h1>

              <motion.p variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16" >
                If you can imagine it{" "}
                <span className="font-bold text-newred">you can code it.</span>
              </motion.p>
              <div className="flex justify-center xl:hidden relative">
                <AboutButton />
              </div>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex"
              >
                <AboutButton />
              </motion.div>
            </div>
            <div className="w-[1200px] h-full absolute right-0 bottom-0 z-0">
              <ParticlesContainer/>

              <motion.div 
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{duration:1 , ease:'easeInOut'}}
              className="w-full h-full max-w-[700px] max-h-[700px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
                <Profile/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
