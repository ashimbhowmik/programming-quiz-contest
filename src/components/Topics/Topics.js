import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Topics = () => {
  const quizData = useLoaderData();
  const quizs = quizData.data;

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8 lg:mx-[150px] mx-5 pt-8">
        {quizs.map((quiz) => (
          <Quiz quiz={quiz} key={quiz.id}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
