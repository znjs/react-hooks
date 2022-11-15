import "./App.css";
import { DebugValueHook } from "./examples/DebugValueHook";

function App() {
  return (
    <div className="text-center w-screen h-screen bg-blue-900 text-white">
      <h1 className="text-4xl">React Hooks Demo</h1>
      <hr className="my-3" />
      {/* <StateHook /> */}
      {/* <EffectHook /> */}
      {/* <ContextHook /> */}
      {/* <ReducerHook /> */}
      {/* <RefHoof /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      {/* <TransitionHook /> */}
      {/* <DefferedHook /> */}
      {/* <Dummy /> */}
      {/* <LayoutHook /> */}
      <DebugValueHook />
    </div>
  );
}

export default App;
