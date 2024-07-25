import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="ease-in-out sticky top-0 z-10 dark:bg-secondary min-[993px]:h-[71px] h-[64px]"></header>
      <main className="w-full flex items-center justify-center text-fo-black min-[425px]:px-16 px-4 pb-[96px]">
        <section className="container flex flex-col items-center pt-10 lg:pt-40">
          <div className="flex items-center gap-[12px] font-medium p-[4px_8px_4px_4px] text-sm text-secondary bg-[#EEEEEE] rounded-[8px] hover:cursor-pointer border border-[#6B9FFF] border-opacity-0 hover:border-opacity-100 active:border-opacity-100 outline-none ring-0 ring-[#6B9FFF] hover:ring-[3px] focus:ring-[3px] active:ring-[1px] ring-opacity-0 hover:ring-opacity-30 focus:ring-opacity-30 active:ring-opacity-30 transition-all duration-500 ease-out">
            <span className="p-[2px_10px] align-middle bg-white rounded-[8px] text-fo-blue border-fo-blue border-[1px] text-sm">
              Join us
            </span>
            <div className="flex items-center gap-[4px]">
              <span>✨</span> Come join us at Convention
            </div>
          </div>
          <div className="my-6 text-center">
            <h1 className=" [font-kerning:none] duration-700">
              The ultimate influencer <br /> discovery platform.
            </h1>
            <p className="fo-d-body mt-6">
              So good, you&apos;ll keep it forever.
            </p>
          </div>
          <button className="bg-fo-black fo-button-lg mt-4 text-white border-fo-black border-[1px] border-solid fo-button-primary hover:border-[#505967]">
            Book a demo
          </button>
          <div className="flex justify-center w-full">
            <div className="relative sm:aspect-[1.87] aspect-[1.3149] sm:w-[82.5%] w-full mt-[80px] flex justify-center items-center">
              <Image
                src="/thumbnail.png"
                fill={true}
                alt="app screen"
                style={{
                  filter:
                    "drop-shadow(0 20px 24px rgb(0 0 0 / 0.08)) drop-shadow(0 8px 8px rgb(0 0 0 / 0.03))",
                }}
                className="sm:block hidden border-[1px] rounded-[26.64px] border-[#E0E0E0]"
              />
              <Image
                src="/thumbnail_mobile.png"
                fill={true}
                alt="app screen mobile"
                className="sm:hidden block drop-shadow-[0_9.77px_19.54px_rgba(0,0,0,0.18)]"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-[65%] lg:scale-[1.2]">
                <div className="absolute inset-0 animate-[video-hero-ripple-outer_4s_ease-out_infinite] rounded-full border border-white-100 bg-[radial-gradient(#266df0_27.08%,#266df0_100%)]"></div>
                <div className="absolute inset-0 animate-[video-hero-ripple-inner_4s_ease-out_infinite] rounded-full border border-white-100 bg-[radial-gradient(#266df0_27.08%,#266df0_100%)]"></div>
                <button className="relative p-[21px] transition-all bg-[#E0E0E0] animate-[video-hero-pulse_4s_ease-out_infinite] rounded-full sm:w-[84px] sm:h-[84px] w-[64px] h-[64px]  flex items-center justify-center ring-0 ring-blue-500 ring-offset-1 ring-offset-white-100">
                  <div className="w-0 h-0 border-t-transparent border-l-[22.86px] border-b-[11.43px] border-t-[11.43px] border-l-fo-black  ml-[6px] border-b-transparent"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
