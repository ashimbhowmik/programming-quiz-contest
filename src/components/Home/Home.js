import React from "react";
import { Link } from "react-router-dom";
import Topics from "../Topics/Topics";
import img1 from "./../Media/img-1.gif";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <figure className="w-[40%]">
          <img className="w-full" src={img1} alt="" />
        </figure>
        <div className="w-[60%] mr-12">
          <h1 className="text-5xl font-extrabold dark:text-white">
            Programming Quiz Contest
          </h1>
          <p className="my-4 text-lg text-gray-500">
            A programming language is a system of notation for writing computer
            programs.Most programming languages are text-based formal languages,
            but they may be also be graphical. They are a kind of computer
            language.
          </p>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Programming lenguage : Javascript , Python, Go , Java , Kotlin , PHP
            , C# , wift , R , Ruby , C and C++ , Matlab , TypeScript , Scala
          </p>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Attanded Programming Contest Here...
          </p>
          <Link
            to="/topics"
            className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
          >
            Quizs
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <Topics></Topics>
    </div>
  );
};

export default Home;
