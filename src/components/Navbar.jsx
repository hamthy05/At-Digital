import Logo from "../assets/Logo.png";
import { useState } from "react";

function Navbar() {
  const Links = [
    { name: "SERVICE", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "CONTACT US", link: "/" },
    { name: "CAREERS", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-[#6b3cc9] justify-between items-center p-4 shadow-md w-full sticky z-20 top-0 left-0">
      <img className="pl-[5%]" src={Logo} alt="log" />

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <div className="pr-[5%]  text-white  md:flex ">
        <ul
          className={`bg-white h-screen md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-[#6b3cc9] md:z-auto z-[-1] left-0 w-full md:h-[30px] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[65px] " : "top-[-1090px]"
          }`}
        >
          {/* <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CAREERS</li> */}
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-1xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black  hover:text-gray-400 duration-500 md:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
