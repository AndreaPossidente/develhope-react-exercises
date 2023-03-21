// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../store/counterSlice";

export default function useCounter(initialValue = 0) {
  const { increment, decrement, reset } = counterSlice.actions;
  const count = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset(initialValue));
  };

  // useEffect(() => {
  //   console.log("set initial state");
  //   dispatch(reset(initialValue));
  // }, [dispatch, reset, initialValue]);

  return {
    count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
