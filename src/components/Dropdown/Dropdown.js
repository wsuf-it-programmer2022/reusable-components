import './dropdown.css';
import { useState, useRef, useEffect } from 'react';

function Dropdown({ options = [], onChange = () => {} }) {
  // whenever any state changes in component, that component will rerender
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  // useRef is also for storing data and remembering their values between rerenders
  // whenever the ref changes, the component will NOT rerender
  const container = useRef(null);

  function createIconClass() {
    if (opened === true) {
      return 'icon arrow-up';
    }
    if (opened === false) {
      return 'icon arrow-down';
    }
  }

  const handleOutsideClick = (event) => {
    console.log('user clicked');
    // console.log(document.querySelector('.btn-decrease').disabled);
    // if someone clicks outside of the dropdown container, we close
    // the dropdown
    // .current is the current value of the ref object
    // ? = is checking if the container has a property called current,
    // and will not proceed if there is not.
    if (!container.current?.contains(event.target)) {
      setOpened(false);
    }
  };

  // useEffect is a way for us to do side effects on the container
  useEffect(() => {
    console.log('compoent rendered the first time!');
    document.addEventListener('click', handleOutsideClick);
    // if we add a return statement inside useEffect,
    // and the value of this return statement is a function
    // this function will run when the component is destroyed
    // this way we can do some "cleanup"
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []); // <- the dependency array. In this array we store the varaibla we want to watch
  // whenever something changes in the dependency array, the function inside useEffect will run.
  // if the dependency array is empty, the useEffect will only run Once: when the component first renders

  // javascript expression : everything that is on the right side of the equal sign
  // in JSX everything between { } is a JS expression in JSX

  return (
    <div className='dropdown-container' ref={container}>
      <button
        className='selected'
        onClick={() => {
          setOpened(!opened);
        }}>
        {selected}
        {/* <span className={createIconClass()}></span> */}
        <span className={`${opened ? 'icon arrow-up' : 'icon arrow-down'}`}></span>
      </button>
      {opened && (
        <div className='options'>
          {options.map((option) => (
            <button
              key={option}
              className='option'
              onClick={() => {
                setSelected(option);
                onChange(option);
                setOpened(false);
              }}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
