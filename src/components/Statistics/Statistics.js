import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis } from "recharts";

const Statistics = () => {
  const quizData = useLoaderData();
  const quizs = quizData.data;
  return (
    <div className="flex justify-center">
      <BarChart width={500} height={400} data={quizs}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
      </BarChart>
    </div>
  );
};

export default Statistics;
