import React from "react";
import { useReducer } from "react";

const Reducer = () => {
  const initialState = {
    count: 6,
    text: "Amir Dhahri",
  };
  const reducer = (state, { type }) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "up":
        return { count: state.count + 1 };
      case "down":
        return { count: state.count - 1 };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "up" });
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down" });
        }}
      >
        Down
      </button>
    </>
  );
};

export default Reducer;
