/* eslint-disable no-unused-vars */
import React from "react";
import pic from "/laptop.jpeg";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div 
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 shadow-md h-[700px]">
        <div className="flex flex-col md:flex-row  ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1>Hello, I am a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
            </p>
            <br />
            {/* social media icon */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5 ">
                  <SiMongodb
                    className=" text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer  rounded-full border-[2px]"
                    size={25}
                  />
                  <SiExpress
                    className="text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer  rounded-full border-[2px] "
                    size={25}
                  />
                  <FaReact
                    className="text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer  rounded-full border-[2px] "
                    size={25}
                  />
                  <FaNodeJs
                    className="text-xl md:text-3xl hover:scale-110 duration-200 cursor-pointer  rounded-full border-[2px] "
                    size={25}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" md: w-1/2 md:ml-40 md:mt-20 order-1 ">
            <img
              className=" md:h-[500px] md:w-[500px] rounded-full ml-20 "
              src={pic}
              alt="Loading"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
