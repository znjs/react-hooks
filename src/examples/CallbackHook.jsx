import { useCallback, useState } from "react";
import { CallbackList } from "./CallbackList";

export const CallbackHook = () => {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);

  //   const getNum = () => [number, number + 1, number + 2];

  const getNum = useCallback(() => [number, number + 1, number + 2], [number]);

  const theme = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <h2>CallbackHook</h2>
      <input
        type="number"
        name="num"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="px-2 py-1 rounded-lg text-black outline-0 border-2 border-gray-900"
      />
      <button className="px-2 py-1 rounded-lg bg-blue-500" onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>
      <CallbackList items={getNum} />
    </div>
  );
};
