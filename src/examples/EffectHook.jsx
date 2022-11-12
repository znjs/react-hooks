import React, { useEffect, useState } from "react";

export const EffectHook = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("this runs only the first time");
    return () => console.log("clean up");
  }, []);

  useEffect(() => {
    console.log("runs on first render and when ever there is a state change in count");
    return () => console.log("clean up");
  }, [counter]);
  return (
    <div>
      <h2 className="text-xl">useEffect Examples</h2>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setCounter((count) => count - 1)}
          className="px-2 py-1 mx-2 bg-blue-500 rounded-lg">
          -
        </button>
        <p>{counter}</p>
        <button
          onClick={() => setCounter((count) => count + 1)}
          className="px-2 py-1 mx-2 bg-blue-500 rounded-lg">
          +
        </button>
      </div>
    </div>
  );
};
