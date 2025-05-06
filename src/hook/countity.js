import { useState } from 'react';

const useCountity = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const reset = (value = initialCount) => {
    setCount(value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCountity;
