import { useCallback, useState } from "react";

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((counter) => counter - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return {
    counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
