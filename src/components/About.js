import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Daniel B.
            <br className="hidden lg:inline-block" />Web Developer // Marine Corps Veteran \\ Third Culture Kid
          </h1>
          <p className="mb-8 leading-relaxed">
            UX Engineer => Marine Corps Veteran and former Security Professional with an interest in creating and building things whether it be coding, blacksmithing, or photography. User Experience and Web Development is where my need for learning, designing, problem solving, and creation have merged with professional interest.

Now for the more absurd and less linkedin headline version:

I don't know where I'm from, so I usually give short false-ish answers or long winded convoluted answers to that question. I spent my childhood in East Africa where 'I Did Not ride tigers to school', (the tigers thing, that's one of the amazing actual questions I got asked in school in TN), then I lived in very rural Tennessee for middle-high school where I may or may not have often found myself running from the sounds of meth fueled banjos. Later I joined the Marines for various good reasons but insisted on telling my friends who were awestruck at my new level of lunacy it was because "They gave me this awesome t-shirt!", pretend I'm showing you some cheesy t-shirt a recruiter would hand out to a teenage boy. I apparently like way too long sentences when writing and too far over-simplifying things when talking. I'm Daniel, please feel free to make gratuitous deposits of knowledge bombs and if I'm ever found in a "tis but a fleshwound" scenario after a stapler accident tell the EMTs I'm O+ and allergic to Jelly Fish. Thanks.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
