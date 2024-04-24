/* eslint-disable no-unused-vars */
import React from "react";
import java from "/java.png";
import css from "/css.jpg";
import express from "/express.png";
import html from "/html.png";
import javascript from "/javascript.png";
import node from "/node.png";
import python from "/python.webp";
function Experiance() {
    const cardItem = [
        {
          id: 1,
          logo: java,
          name: "Java",
        },
        {
          id: 2,
          logo: css,
          name: "CSS",
        },
        {
          id: 3,
          logo: express,
          name: "Express",
        },
        {
          id: 4,
          logo: html,
          name: "Html",
        },
        {
          id: 5,
          logo: javascript,
          name: "Javascript",
        },
        {
          id: 6,
          logo: node,
          name: "Node",
        },
        {
          id: 7,
          logo: python,
          name: "Python",
        },
      ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 shadow-lg h-[1000px]"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I&apos;ve more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
