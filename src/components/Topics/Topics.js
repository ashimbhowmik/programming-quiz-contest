import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Topics = () => {
  const quizData = useLoaderData();
  console.log(quizData);
  const quizs = quizData.data;
  console.log(quizs);
  return (
    <div>
      <h2>Topics</h2>
      <div className="grid grid-cols-2 ">
        {quizs.map((quiz) => (
          <Quiz quiz={quiz} key={quiz.id}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
