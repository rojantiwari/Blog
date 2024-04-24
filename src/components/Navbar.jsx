import pic from "/laptop.jpeg";
import { IoMenu } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-sxl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-16">
          <div className=" flex">
            <img src={pic} alt="loading" className="h-12 w-12 rounded-full " />
            <h1 className="font-semibold text-xl cursor-pointer">
              Roja<span className="text-green-500 text-2xl">N</span>
              <p className="text-sm ">Web Developer</p>
            </h1>
          </div>
          <div className=" ">
            <ul className="hidden md:flex space-x-10 ">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200   cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoMenu size={24} /> : <GiCrossMark size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 font-bold  text-xl">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
