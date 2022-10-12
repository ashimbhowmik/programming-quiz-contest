import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const quizData = useLoaderData();
  const quizs = quizData.data;
  return (
    <div className="flex justify-center items-center mt-8 flex-col">
      <BarChart width={400} height={300} data={quizs}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis datakey="total" />
      </BarChart>
      <p className="text-xl mt-4">Fig1 : Quiz total</p>
    </div>
  );
};

export default Statistics;
