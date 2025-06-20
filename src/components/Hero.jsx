import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className="container flex flex-col justify-center items-center content-center h-screen">
      <h1 className="font-bold text-4xl text-center my-6 text-white">
        <Typewriter
          words={["Welcome to the Quiz App"]}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={60}
          delaySpeed={1000}
        />
      </h1>
      <div className="btn my-6">
        <Link to={"/questions"}><button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300">
          Continue
        </button></Link>
      </div>
    </div>
  );
};

export default Hero;
