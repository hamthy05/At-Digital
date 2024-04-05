import Search from "../assets/Search.png";

function Digital() {
  return (
    <div className="flex flex-col-reverse  items-center  w-[335px] ml-auto mr-auto  mt-[40%] gap-[20px] text-center md:text-left md:flex-row md:w-[688px] md:mt-[10%]  md:gap-[20px]   lg:w-[896px] lg:mt-[5%]  lg:gap-[20px] xl:w-[1064px]   xl:gap-[108px]">
      <img
        className="order-2 w-[275px] h-[275px] lg:w-[414px] lg:h-[414px]"
        src={Search}
        alt="Search"
      />
      <div className="order-1 flex flex-col items-center justify-center gap-5 md:items-start">
        <h1 className="text-[27px] text-[#6b3cc9] font-semibold">
          Digital Strategy Consulting
        </h1>
        <p className="">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button className="border border-none  rounded-md w-[129px] h-[38px] bg-[#f28d35] text-white font-medium">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default Digital;
