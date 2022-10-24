import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (/* value */) => {
    //setCounter(counter + value);
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (decrement === 0) return;
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
