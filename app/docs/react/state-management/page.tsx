import { TableOfContents } from "@/components/table-of-contents"
import { useReducer, createContext, useContext, useState } from 'react'

export default function ReactStateManagementPage() {
  const tocItems = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "context-api", title: "Context API", level: 2 },
    { id: "use-reducer", title: "useReducer Hook", level: 2 },
    { id: "redux", title: "Redux Basics", level: 2 },
    { id: "zustand", title: "Zustand", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">React State Management</h1>
          <section id="overview">
            <h2>Overview</h2>
            <p>State management in React ranges from local component state to global stores. Choose a solution based on app complexity.</p>
          </section>
          <section id="context-api">
            <h2>Context API</h2>
            <p>Built-in way to share state across component tree without prop drilling:</p>
            <pre >{`// createContext and Provider
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Theme is {theme}</button>;
}`} </pre>
          </section>
          <section id="use-reducer">
            <h2>useReducer Hook</h2>
            <p>An alternative for complex local state logic:</p>
            <pre >{`function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}`} </pre>
          </section>
          <section id="redux">
            <h2>Redux Basics</h2>
            <p>Popular library for predictable global state. Core concepts: store, actions, reducers:</p>
            <pre >{`// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 }
  }
});
export const { increment, decrement } = counterSlice.actions;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
export const store = configureStore({ reducer: { counter: counterReducer } });

// Counter.js
import { useSelector, useDispatch } from 'react-redux';
function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}`} </pre>
          </section>
          <section id="zustand">
            <h2>Zustand</h2>
            <p>Lightweight state management using hooks:</p>
            <pre >{`import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}
`} </pre>
          </section>
        </main>

        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}