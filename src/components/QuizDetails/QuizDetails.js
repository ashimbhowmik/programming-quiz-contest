import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowQuiz from "../ShowQuiz/ShowQuiz";

const QuizDetails = () => {
  const loadQuiz = useLoaderData();
  const listQuizs = loadQuiz.data.questions;
  console.log(listQuizs);
  return (
    <div>
      {listQuizs.map((quiz) => (
        <ShowQuiz quiz={quiz} key={quiz.id}></ShowQuiz>
      ))}
      <div></div>
    </div>
  );
};

export default QuizDetails;
