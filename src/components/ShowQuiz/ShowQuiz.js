import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
const ShowQuiz = ({ quiz }) => {
  const { options, question, id, correctAnswer } = quiz;
  return (
    <div>
      <div className="p-14 mb-12 shadow-lg rounded-lg">
        <div className="relative flex justify-center items-center mb-6">
          <h3 className="lg:text-xl  lg:w-[65%] text-center lg:mr-0 mr-7">
            {question}
          </h3>
          <FontAwesomeIcon
            className="absolute right-0 top-0 cursor-pointer"
            icon={faEye}
            onClick={() => {
              toast.success(correctAnswer, {
                theme: "colored",
              });
            }}
          ></FontAwesomeIcon>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-4">
          <div class="flex items-center border-2 p-5 rounded-lg">
            <input
              id={id}
              type="radio"
              value={options[0] ? options[0] : "All the above"}
              name={id}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  toast.success(correctAnswer, {
                    theme: "colored",
                  });
                } else {
                  toast.error("Wrong Answer", {
                    theme: "colored",
                  });
                }
              }}
            />
            <label
              for={id}
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[0] ? options[0] : "All the above"}
            </label>
          </div>
          <div class="flex items-center border-2 p-5 rounded-lg">
            <input
              id={id}
              type="radio"
              value={options[1] ? options[1] : "All the above"}
              name={id}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  toast.success(correctAnswer, {
                    theme: "colored",
                  });
                } else {
                  toast.error("Wrong Answer", {
                    theme: "colored",
                  });
                }
              }}
            />
            <label
              for={id}
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[1] ? options[1] : "All the above"}
            </label>
          </div>
          <div class="flex items-center border-2 p-5 rounded-lg">
            <input
              id={id}
              type="radio"
              value={options[2] ? options[2] : "All the above"}
              name={id}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  toast.success(correctAnswer, {
                    theme: "colored",
                  });
                } else {
                  toast.error("Wrong Answer", {
                    theme: "colored",
                  });
                }
              }}
            />
            <label
              for={id}
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[2] ? options[2] : "All the above"}
            </label>
          </div>
          <div class="flex items-center border-2 p-5 rounded-lg">
            <input
              id={id}
              type="radio"
              value={options[3] ? options[3] : "All the above"}
              name={id}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.value === correctAnswer) {
                  toast.success(correctAnswer, {
                    theme: "colored",
                  });
                } else {
                  toast.error("Wrong Answer", {
                    theme: "colored",
                  });
                }
              }}
            />
            <label
              for={id}
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {options[3] ? options[3] : "All the above"}
            </label>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ShowQuiz;
