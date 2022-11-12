import React from "react";
import ContextExO from "./context/ContextExO";
import ContextExT from "./context/ContextExT";
import { useCounter } from "./context/counter-context";

export const ContextHook = () => {
  const { counter } = useCounter();
  return (
    <div>
      <h2 className="text-lg">useContext example</h2>
      <p>shared counter example</p>
      <p>Counter: {counter}</p>
      <div className="flex justify-center items-center gap-4">
        <ContextExO />
        <ContextExT />
      </div>
    </div>
  );
};
