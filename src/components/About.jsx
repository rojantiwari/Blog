/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 shadow-lg h-[1000px] md:h-[750px]"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hello, I&apos;m {""}
            <span className="text-xl font-bold bg-black-900 text-justify">
              Rojan
            </span>
            , a passionate Web developer with a keen eye for MERN Stack . With a
            background in Software Engineer, I strive to create impactful and
            visually stunning Software solutions that leave a lasting
            impression.
          </p>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Education & Training
          </h1>
          <span className="text-justify">
            [Degree/Certification], [Institution], [Year]
            [Degree/Certification], [Institution], [Year] [Relevant Course],
            [Platform/Institution], [Year]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span className="text-justify">
            Proficient in [Programming Languages] Experienced with [Software
            Tools/Technologies] Strong grasp of [Design Principles/Concepts]
            Excellent problem-solving skills Effective communicator and
            collaborator
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Professional Experience
          </h1>
          <span className="text-justify">
            [Job Title], [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Job Title],
            [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Freelance/Contract Work],
            [Client/Organization], [Dates] [Brief description of projects and
            contributions]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Achievements & Awards
          </h1>
          <span className="text-justify">
            [Award/Recognition], [Organization/Institution], [Year]
            [Achievement], [Organization/Platform], [Year]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <span className="text-justify">
            My mission is to leverage my skills and creativity to deliver
            innovative software solutions that exceed client expectations and
            contribute positively to the digital landscape. I am committed to
            continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </span>
          <br />
        </div>
      </div>
    </>
  );
}

export default About;
