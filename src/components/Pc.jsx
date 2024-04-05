import Comp from "../assets/Pc.png";

function Pc() {
  return (
    <div className="flex flex-col  items-center  w-[335px] ml-auto mr-auto  mt-[50%] gap-[20px] text-center md:text-left md:flex-row md:w-[688px] md:mt-[30%]  md:gap-[20px]   lg:w-[896px] lg:mt-[5%]  lg:gap-[20px] xl:w-[1064px]   xl:gap-[108px]">
      <img
        className="w-[275px] h-[275px] lg:w-[414px] lg:h-[414px]"
        src={Comp}
        alt="Pc"
      />
      <div className="flex flex-col items-center justify-center gap-5 md:items-start">
        <h1 className="text-[27px] text-[#6b3cc9] font-semibold">
          Web & Mobile App Development
        </h1>
        <p>
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <button className="border border-none  rounded-md w-[129px] h-[38px] bg-[#f28d35] text-white font-medium">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default Pc;
