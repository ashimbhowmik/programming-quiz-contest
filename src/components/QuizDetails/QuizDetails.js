import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const loadQuiz = useLoaderData();
  console.log(loadQuiz);
  return (
    <div>
      <h2>helo</h2>
    </div>
  );
};

export default QuizDetails;
