import React from "react";
import useCounter from "../hooks/useCounter";

export default function Counter({ initialValue }) {
  // custom hook
  const { count, onIncrement, onDecrement, onReset } = useCounter(initialValue);

  const styles = {
    container: "flex flex-col justify-center items-center h-[200px]",
    btn: "px-3 py-1 m-2 border rounded-md min-w-[50px]",
    h1: "text-6xl mb-6",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{count}</h1>
      <div>
        <button className={styles.btn} onClick={onDecrement}>
          -
        </button>
        <button className={styles.btn} onClick={onIncrement}>
          +
        </button>
        <button className={styles.btn} onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
