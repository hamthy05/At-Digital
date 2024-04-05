import Logo from "../assets/Logo.png";

function Footer() {
  return (
    <div className="mt-10 bg-[#6b3cc9] p-5 text-white px-20">
      <div className="flex flex-col justify-between gap-20 md:flex-col lg:flex-row">
        <div className="flex flex-col gap-5 w-[100%]  md:w-[413px]">
          <img className="w-[239px]" src={Logo} alt="Lo" />
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex flex-col gap-[48px] md:flex-row md:gap-[128px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">Our Technologies</h1>
            <p>React JS</p>
            <p>Gatsby</p>
            <p>Next JS</p>
            <p>Node JS</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">Our Services</h1>
            <p>Social media Marketing</p>
            <p>Web & Mobile App Development</p>
            <p>Data & Analytics</p>
          </div>
        </div>
      </div>
      <div className="border border-t-1 mt-10 mx-[5%] lg:mx-[30%]"></div>
      <div className="py-1 flex gap-5 justify-center">
        <p>Privacy Policy</p>
        <p>|</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
}

export default Footer;
