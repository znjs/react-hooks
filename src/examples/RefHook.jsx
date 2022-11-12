import { useRef } from "react";

export const RefHoof = () => {
  const name = useRef("");
  const email = useRef("");
  return (
    <div>
      <h2 className="text-lg">RefHook</h2>
      <div className="flex justify-center items-center my-2">
        <label htmlFor="name" className="mx-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          ref={name}
          className="px-2 py-1 rounded-lg text-black outline-0"
        />
      </div>
      <div className="flex justify-center items-center my-2">
        <label htmlFor="email" className="mx-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          ref={email}
          className="px-2 py-1 rounded-lg text-black outline-0"
        />
      </div>
      <button
        className="mx-auto px-2 py-1 bg-red-600 rounded-lg"
        onClick={() => {
          console.log(name.current.value);
          console.log(email.current.value);
        }}>
        print
      </button>
    </div>
  );
};
