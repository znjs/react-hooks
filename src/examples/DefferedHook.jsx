import { useState } from "react";
import { DefferedHookList } from "./DefferedHookList";

export const DefferedHook = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <h2>useDeffered Hook</h2>
      <input
        type="text"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-2 py-1 rounded-lg text-black outline-0 border-2 border-gray-900"
      />
      <DefferedHookList input={input} />
    </div>
  );
};
