<div align="center">
    <img src="./src/logo.svg" alt="drawing" width="100"/>
</div>

# React Hooks

## Hooks?

Hooks are special functions in react with added behavior to it.
They are introduced in React 16.8
Hooks can only be used in functional components based React and not in class based.

## Basic Hooks?

- [`useState`](./src/examples/StateHook.jsx): Used for state management. Returns a stateful value and function to update the state
- [`useEffect`](./src/examples/EffectHook.jsx): Used for performing side effects in React component. Accepts a callback function, and array of elements with its dependencies(optional)
- [`useContext`](./src/examples/context/counter-context.js): Context API is used as a solution for prop drilling, sharing data among different Components by using `Provider` wrapper to the component being used
