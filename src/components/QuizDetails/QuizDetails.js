import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowQuiz from "../ShowQuiz/ShowQuiz";

const QuizDetails = () => {
  const loadQuiz = useLoaderData();
  const listQuizs = loadQuiz.data.questions;
  const quizName = loadQuiz.data;
  const { name } = quizName;
  return (
    <div>
      <div className="mt-8 mx-5 lg:mx-[150px]">
        <h3 className="text-center text-3xl font-bold text-blue-500">
          Quiz of {name}
        </h3>
        {listQuizs.map((quiz) => (
          <ShowQuiz quiz={quiz} key={quiz.id}></ShowQuiz>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
