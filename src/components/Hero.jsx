import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container flex flex-col justify-center items-center content-center h-screen">
      <h1 className="font-bold text-6xl text-center my-6 text-indigo-600">
        <Typewriter
          words={["Welcome to the Quizky"]}
          loop={1}
          cursor=""
          typeSpeed={60}
          delaySpeed={1000}
        />
      </h1>

      <div className="btn my-6">
        <Link to="/questions">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            Continue
          </button>
        </Link>
      </div>

      <div className="mt-4 text-center ">
        <p className="text-gray-600  mb-2 font-bold">Connect with me:</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/Zakria-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-800 underline text-3xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/zakria-ahmed-429921354/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-indigo-800 underline text-3xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />

          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
