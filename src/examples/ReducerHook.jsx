import { useReducer } from "react";

export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload.message };
    case "UPDATE_COUNTER":
      return { ...state, count: state.count + action.payload.count };
    default:
      return { ...state };
  }
};

export const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducerFunc, { message: "", count: 0 });
  return (
    <div>
      <h1 className="text-lg">ReducerHook</h1>
      <input
        className="text-black px-2 py-1 rounded-lg outline-0"
        type="text"
        name="message"
        id="message"
        value={state.message}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_MESSAGE",
            payload: { message: e.target.value },
          })
        }
      />
      <p>{state.message}</p>
      <p>Counter: {state.count}</p>
      <div className="flex justify-center items-center gap-4">
        <button
          className="px-2 py-1 rounded-lg bg-red-600"
          onClick={() =>
            dispatch({
              type: "UPDATE_COUNTER",
              payload: { count: -1 },
            })
          }>
          -
        </button>
        <button
          className="px-2 py-1 rounded-lg bg-red-600"
          onClick={() =>
            dispatch({
              type: "UPDATE_COUNTER",
              payload: { count: 1 },
            })
          }>
          +
        </button>
      </div>
    </div>
  );
};
