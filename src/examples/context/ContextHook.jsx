import React from "react";
import ContextExO from "./ContextExO";
import ContextExT from "./ContextExT";
import { useCounter } from "./counter-context";

const ContextHook = () => {
  const { counter } = useCounter();
  return (
    <div>
      <h2 className='text-lg'>useContext example</h2>
      <p>shared counter example</p>
      <p>Counter: {counter}</p>
      <div className='flex justify-center items-center gap-4'>
        <ContextExO />
        <ContextExT />
      </div>
    </div>
  );
};

export default ContextHook;
