import React, { useId } from "react";

export const Email = () => {
  const Id = useId();
  //   const Id2 = useId();
  return (
    <div>
      <label htmlFor={`${Id}-email`}>email</label>
      <input
        type="email"
        name="email"
        id={`${Id}-email`}
        className="px-2 py-1 text-black rounded-lg ml-4 mb-4"
      />
      <br />
      <label htmlFor={`${Id}-name`}>name</label>
      <input
        type="text"
        name="name"
        id={`${Id}-name`}
        className="px-2 py-1 text-black rounded-lg ml-4"
      />
    </div>
  );
};
