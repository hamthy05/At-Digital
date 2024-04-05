import HeroFrame from "../assets/Hero.png";

function Hero() {
  return (
    <div className="flex flex-col ">
      <img
        className="w-[100%] h-[218px] relative md:h-[448px] lg:h-[700px]"
        src={HeroFrame}
        alt="Hero"
      />
      <div
        className="border border-none flex flex-col p-5 gap-5 text-white w-[100%] h-[295px] top-[218px] absolute    md:h-[258px] md:top-[448px]   lg:w-[613px] lg:h-[306px]  lg:left-[5%] lg:top-[434px] "
        style={{
          backgroundImage:
            "linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)",
        }}
      >
        <h1 className="text-4xl font-bold  sm:text-5xl">
          We Crush Cour Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <button className="border border-none rounded-md w-[214px] h-[38px] bg-[#f28d35] font-medium">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
}

export default Hero;
