import './dropdown.css';
import { useState } from 'react';

function Dropdown({ options = [] }) {
  // whenever any state changes in component, that component will rerender
  const [opened, setOpened] = useState(false);

  function createIconClass() {
    if (opened === true) {
      return 'icon arrow-up';
    }
    if (opened === false) {
      return 'icon arrow-down';
    }
  }

  // javascript expression : everything that is on the right side of the equal sign
  // everything between { } is an expression in JSX

  return (
    <div className='dropdown-container'>
      <button
        className='selected'
        onClick={() => {
          setOpened(!opened);
        }}>
        Apple
        {/* <span className={createIconClass()}></span> */}
        <span className={`${opened ? 'icon arrow-up' : 'icon arrow-down'}`}></span>
      </button>
      {opened && (
        <div className='options'>
          {options.map((option) => (
            <button key={option} className='option'>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
