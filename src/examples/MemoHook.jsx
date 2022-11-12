import { useEffect, useMemo, useState } from "react";

export const MemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const theme = {
  //   background: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  // };

  const theme = useMemo(
    () => ({
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }),
    [dark],
  );
  useEffect(() => {
    console.log("Theme Updated");
  }, [theme]);

  return (
    <div style={theme}>
      <h2>useMemo Hook</h2>
      <input
        type="number"
        name="num"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="px-2 py-1 rounded-lg text-black outline-0 border-2 border-gray-900"
      />
      <button className="px-2 py-1 rounded-lg bg-blue-500" onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
};
