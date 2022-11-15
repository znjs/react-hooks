import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DebugValueHook = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [firstname, setFirstName] = useLocalStorage("name", "");
  const [lastname, setLastName] = useLocalStorage("name", "");

  return (
    <div>
      <h2>useDebug Hook</h2>
      <p className="text-white p-4">{isOnline ? "Online" : "Offline"}</p>
      <button
        className="px-2 py-1 rounded-lg bg-blue-500"
        onClick={() => setIsOnline((prev) => !prev)}>
        Toggle online State
      </button>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        className="text-black px-2 py-1 outline-0 rounded-lg"
      />
      <p>{firstname}</p>
      <input
        type="text"
        name="name"
        id="name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        className="text-black px-2 py-1 outline-0 rounded-lg"
      />
      <p>{lastname}</p>
    </div>
  );
};
