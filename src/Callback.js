/* eslint-disable react/display-name */
import { useState, useCallback, useEffect, memo } from 'react';

// 1. goldern rule of react: whenever a state changes inside a component, that component will rerender
// 2. golden rule of react: whenever props change in a child component, the child component will rerernder
// memo is watching if props change
const ChildComponent = memo(({ count, compute }) => {
  return (
    <div style={{ border: '2px solid red' }}>
      <h1>Child Component</h1>
      <h4>computed: {compute(count)}</h4>
      <h4>last rerender: {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [num, setNum] = useState(35);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
    // if we don't have a dependency array: the callback will be executed
    // every single time, the component rerenders
  });

  // const x = 5;
  // x === 5 // true

  // const func = function() {};
  // func === function() {}; // false
  const compute = () => {
    return num + 4;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>UseCallback example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setNum(num + 1)}>Current num value: {num}</button>
      <ChildComponent compute={useCallback(compute, [])} count={num} />
    </div>
  );
};

export default CallbackComponent;
