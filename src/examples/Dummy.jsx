import { useState, useTransition } from "react";

export const Dummy = () => {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const clickHandler = () => {
    setCount((prev) => prev + 1);
    console.log(count);
    startTransition(() => {
      console.log(count);
      setCount((prev) => prev + 1);
    });
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={clickHandler} className="px-2 py-1 bg-blue-500 rounded-lg">
        Inc Count
      </button>
    </div>
  );
};
