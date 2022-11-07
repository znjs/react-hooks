import React from "react";
import { useCounter } from "./counter-context";

const ContextExT = () => {
  const { setCounter } = useCounter();
  return (
    <div className='my-2 p-4 rounded-lg border-2 border-gray-900'>
      <h2 className='text-xl text-green-600'>ContextExT</h2>
      <div className='flex justify-center items-center'>
        <button
          className='bg-green-600 px-2 py-1 mx-2 rounded-lg'
          onClick={() => setCounter((prev) => prev - 1)}>
          -
        </button>
        <button
          className='bg-green-600 px-2 py-1 mx-2 rounded-lg'
          onClick={() => setCounter((prev) => prev + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ContextExT;
