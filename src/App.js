import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "./redux/counterSlice";
import "./App.css";

function App() {
    const { counterValue } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <p>{counterValue}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(25))}>Increment by 25</button>
            <button onClick={() => dispatch(decrementByAmount(25))}>Decrement by 25</button>
        </div>
    );
}

export default App;
