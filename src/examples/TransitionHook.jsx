import React, { useState, useTransition } from "react";

const LIST_SIZE = 2000;

export const TransitionHook = () => {
  const [isPending, startTransition] = useTransition();
  const [string, setString] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setString(e.target.value);
    startTransition(() => {
      let l = [];
      for (let j = 0; j < LIST_SIZE; j++) {
        l.push(e.target.value);
      }
      setItems(l);
    });
  };
  return (
    <div>
      <h2>useTransition Hook</h2>
      <input
        type="text"
        name="text"
        value={string}
        onChange={(e) => handleChange(e)}
        className="px-2 py-1 rounded-lg bg-blue-500 text-black"
      />
      {!isPending && items.map((i, idx) => <p key={idx}>{i}</p>)}
    </div>
  );
};
