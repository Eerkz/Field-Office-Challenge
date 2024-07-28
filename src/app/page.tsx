"use client";

import { motion } from "framer-motion";
import Grid from "@/components/ui/Grid";
import Image from "next/image";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";

const commonInitial = { opacity: 0, transform: "translateY(-1.5rem)" };
const commonAnimate = { opacity: 1, transform: "translateY(0)" };
const commonTransition = { ease: "ease" };

const joinUsAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ...commonTransition, delay: 1, duration: 1 },
};

const h1Animation = {
  initial: commonInitial,
  animate: commonAnimate,
  transition: { ...commonTransition, delay: 0, duration: 0.7 },
};

const pAnimation = {
  initial: commonInitial,
  animate: commonAnimate,
  transition: { ...commonTransition, delay: 0.3, duration: 0.7 },
};

const buttonAnimation = {
  initial: commonInitial,
  animate: commonAnimate,
  transition: { ...commonTransition, delay: 0.7, duration: 0.7 },
};

export default function Home() {
  return (
    <>
      <header className="ease-in-out sticky top-0 z-10 dark:bg-secondary min-[993px]:h-[71px] h-[64px]"></header>
      <main className="w-full flex items-center justify-center text-fo-black min-[425px]:px-16 px-4">
        <section className="container flex flex-col items-center pt-10 lg:pt-40">
          <motion.div
            initial={joinUsAnimation.initial}
            animate={joinUsAnimation.animate}
            transition={joinUsAnimation.transition}
            className="flex items-center gap-[12px] font-medium p-[4px_8px_4px_4px] text-secondary bg-[#EEEEEE] rounded-[8px] hover:cursor-pointer border border-[#6B9FFF] border-opacity-0 hover:border-opacity-100 active:border-opacity-100 outline-none ring-0 ring-[#6B9FFF] hover:ring-[3px] focus:ring-[3px] active:ring-[1px] ring-opacity-0 hover:ring-opacity-30 focus:ring-opacity-30 active:ring-opacity-30 transition-all duration-500 ease-out"
          >
            <span className="p-[2px_10px] align-middle bg-white rounded-[8px] text-fo-blue border-fo-blue border-[1px] text-sm">
              Join us
            </span>
            <AnimatedShinyText className="flex items-center gap-[4px] text-sm">
              <span>✨</span> Come join us at Convention
            </AnimatedShinyText>
          </motion.div>
          <div className="my-6 text-center">
            <motion.h1
              initial={h1Animation.initial}
              animate={h1Animation.animate}
              transition={h1Animation.transition}
              className="[font-kerning:none] transition-all duration-700"
            >
              The ultimate influencer <br /> discovery platform.
            </motion.h1>
            <motion.p
              initial={pAnimation.initial}
              animate={pAnimation.animate}
              transition={pAnimation.transition}
              className="fo-d-body mt-6"
            >
              So good, you&apos;ll keep it forever.
            </motion.p>
          </div>
          <motion.button
            initial={buttonAnimation.initial}
            animate={buttonAnimation.animate}
            transition={buttonAnimation.transition}
            className="bg-fo-black fo-button-lg mt-4 text-white border-fo-black border-[1px] border-solid fo-button-primary hover:border-[#505967]"
          >
            Book a demo
          </motion.button>

          <div className="flex justify-center w-full relative pb-[96px]">
            <div className="absolute z-[-1] top-[-25px] w-screen h-full sm:block hidden">
              <Grid color="#E7E5E4" squareHeight={37} squareWidth={32} />
              {/* using aceternity package */}
              {/* <div className="w-full h-[125%] dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-[#E7E5E4]/[0.65]"></div> */}
            </div>
            <div className="relative sm:aspect-[1.87] aspect-[1.3149] sm:w-[82.5%] w-full mt-[80px] flex justify-center items-center">
              <Image
                src="/thumbnail.png"
                fill={true}
                alt="app screen"
                className="sm:block hidden border-[1px] rounded-[26.64px] border-[#E0E0E0] [filter:drop-shadow(0_20px_24px_rgb(0_0_0/0.08))_drop-shadow(0_8px_8px_rgb(0_0_0/0.03))]"
              />
              <Image
                src="/thumbnail_mobile.png"
                fill={true}
                alt="app screen mobile"
                className="sm:hidden block [filter:drop-shadow(0_9.77px_19.54px_rgb(0_0_0/0.18))]"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-[65%] lg:scale-[1.2]">
                <div className="absolute inset-0 animate-[video-hero-ripple-outer_4s_ease-out_infinite] rounded-full border border-white-100 bg-[radial-gradient(#266df0_27.08%,#266df0_100%)]"></div>
                <div className="absolute inset-0 animate-[video-hero-ripple-inner_4s_ease-out_infinite] rounded-full border border-white-100 bg-[radial-gradient(#266df0_27.08%,#266df0_100%)]"></div>
                <button className="relative p-[21px] transition-all bg-[#E0E0E0] animate-[video-hero-pulse_4s_ease-out_infinite] rounded-full sm:w-[84px] sm:h-[84px] w-[64px] h-[64px] flex items-center justify-center ring-0 ring-blue-500 ring-offset-1 ring-offset-white-100">
                  <div className="w-0 h-0 border-t-transparent border-l-[22.86px] border-b-[11.43px] border-t-[11.43px] border-l-fo-black ml-[6px] border-b-transparent"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
