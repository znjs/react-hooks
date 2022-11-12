import { useEffect, useState } from "react";

export const CallbackList = ({ items }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(items());
    console.log("computing list");
  }, [items]);
  return (
    <div>
      {list.map((num, idx) => (
        <p key={idx}>{num}</p>
      ))}
    </div>
  );
};
