import { useState, useMemo } from 'react';

// this is a very slow function if n is too much
const excessiveRecursion = (n) => {
  if (n <= 1) {
    return 1;
  }
  return excessiveRecursion(n - 1) + excessiveRecursion(n - 2);
};

const MemoComponent = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [num, setNum] = useState(35);

  const fib = useMemo(() => excessiveRecursion(num), [num]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        onClick={() => {
          setIsGreen(!isGreen);
        }}
        style={{ color: isGreen ? 'limegreen' : 'crimson' }}>
        useMemo example
      </h1>
      <h2>
        Result of excessiveRecursion for {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default MemoComponent;
