/* eslint-disable no-unused-vars */
import React from "react";
import java from "/java.png";
import css from "/css.jpg";
import express from "/express.png";
import html from "/html.png";
import javascript from "/javascript.png";
import node from "/node.png";
import python from "/python.webp";

function PortFolio() {
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
    <>
      <div 
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 h-[2500px] md:h-[900px] shadow-lg">
        <div>
          <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
          <span className="text-xl font-semibold underline">
            Featured Project
          </span>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 my-5 py-6 h-[500px] ">
            {cardItem.map(({ id, logo, name }) => (
              <div key={id} className="md:w-[300px] md:h-[350px] border-[2px] rounded-lg hover:scale-110 duration-200">
                <img src={logo} alt="Loading" className="w-[120px] h-[120] p-1 rounded-full border-[2px] hover:scale-110 duration-300 ml-10 mt-3" />
                <div>
                  <div className=" px-2 font-bold text-xl mb-2 texts-center ">{name}</div>
                  <p className="text-justify px-2 tex-grey-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam dolor, voluptatum modi ullam praesentium nihil!
                  </p>
                </div>
                <div className="px-6 py-4 space-x-3 justify-around ">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortFolio;
