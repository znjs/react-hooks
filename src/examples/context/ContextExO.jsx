import React from "react";
import { useCounter } from "./counter-context";

const ContextExO = () => {
  const { setCounter } = useCounter();

  return (
    <div className="border-2 border-gray-900 my-2 p-4 rounded-lg">
      <h1 className=" text-xl text-red-600 font-semibold">ContextExO</h1>
      <div className="flex justify-center items-center">
        <button
          className="bg-red-600 px-2 py-1 mx-2 rounded-lg"
          onClick={() => setCounter((prev) => prev - 1)}>
          -
        </button>
        <button
          className="bg-red-600 px-2 py-1 mx-2 rounded-lg"
          onClick={() => setCounter((prev) => prev + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ContextExO;
