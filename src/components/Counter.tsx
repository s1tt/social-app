import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(prev => prev + 1);
  };
  return (
    <>
      <div>{counter}</div>
      <button className={classes.button} onClick={increment}>
        Click
      </button>
    </>
  );
};

export default Counter;
