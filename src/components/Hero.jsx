import React from "react";

const Hero = () => {
  return (
    
      <div className="container flex flex-col justify-center items-center content-center h-screen">
        <h1 className="font-bold text-4xl">Welcome to the Quiz App</h1>
        <div className="btn my-6">
            <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300">Continue</button>
        </div>
      </div>
    
  );
};

export default Hero;
