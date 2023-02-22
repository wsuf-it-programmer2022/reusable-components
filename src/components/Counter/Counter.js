import './counter.css';
import { useState } from 'react';

// object destructuring
// const { min, max } = props;

// render = calling the function (Counter)
// counter is a react component
const Counter = ({ min = 0, max = 20, onChange = () => {} }) => {
  // const myArray = useState(0);
  // const number = myArray[0];
  // const setNumber = myArray[1];

  // array destructuring
  // closure: the function remembers the value of the variable between calls (rerenders)
  // important: whenever the state changes, the component rerenders
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
    onChange(number + 1);
  }

  function setMax() {
    setNumber(max);
    onChange(max);
  }

  // function setVaue(newValue) {
  //   return function () {
  //     setNumber(newValue);
  //   };
  // }
  // function returning a function
  const setVaue = (newValue) => () => {
    setNumber(newValue);
    onChange(newValue);
  };

  return (
    <div className='counter'>
      <button className='btn btn-small btn-min' onClick={setVaue(min)}>
        Min
      </button>
      <button
        className='btn btn-big btn-decrease'
        disabled={number === min}
        onClick={() => {
          setNumber(number - 1);
          onChange(number - 1);
        }}>
        &lt;
      </button>
      <div className='counter-value'>{number}</div>
      <button className='btn btn-small btn-increase' disabled={number === max} onClick={increment}>
        &gt;
      </button>
      <button className='btn btn-big btn-max' onClick={setMax}>
        Max
      </button>
    </div>
  );
};
export default Counter;
