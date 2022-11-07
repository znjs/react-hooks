import "./App.css";
import ReducerHook from "./examples/ReducerHook";

function App() {
  return (
    <div className='text-center w-screen h-screen bg-blue-900 text-white'>
      <h1 className='text-4xl'>React App</h1>
      <hr className='my-3' />
      {/* <StateHook /> */}
      {/* <EffectHook /> */}
      {/* <ContextHook /> */}
      <ReducerHook />
    </div>
  );
}

export default App;
