import { useState } from "react";

const StateHook = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 className='text-xl'>useState Hook</h2>
      <div>
        <p>Input example</p>
        <input
          className='px-2 py-1 m-2 text-black rounded-lg'
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className='text-md'>{name}</p>
      </div>
      <div>
        <p>Counter example</p>
        <div className='flex justify-center items-center'>
          <button
            onClick={() => setCounter((count) => count - 1)}
            className='px-2 py-1 mx-2 bg-blue-500 rounded-lg'>
            -
          </button>
          <p>{counter}</p>
          <button
            onClick={() => setCounter((count) => count + 1)}
            className='px-2 py-1 mx-2 bg-blue-500 rounded-lg'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateHook;
