import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { name, logo, id } = quiz;
  console.log(quiz);
  return (
    <div>
      <section>
        <figure>
          <img className="w-[300px] h-[300px]" src={logo} alt="" />
        </figure>
        <div>
          <p>{name}</p>
          <Link to={`/quiz/${id}`}>
            <button>Start Quiz</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
