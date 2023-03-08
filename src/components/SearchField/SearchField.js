import { useRef, useState, useEffect } from 'react';
import './searchfield.css';
import scrollIntoView from 'scroll-into-view-if-needed';

const SearchField = ({ options = [] }) => {
  const [opened, setOpened] = useState(false);
  // searchTerm is what the user searches for:
  const [searchTerm, setSearchTerm] = useState('');
  // selected is an existing element of the options array that the user selected
  const [selectedItem, setSelectedItem] = useState('');
  const [searchResults, setSearchResults] = useState(options);
  const [cursorIndex, setCursorIndex] = useState(-1);
  const container = useRef(null);

  const handleOutsideClick = (event) => {
    console.log('user clicked');
    if (!container.current?.contains(event.target)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    if (cursorIndex === -1) return;
    // console.log('cursorindex> ' + cursorIndex);
    // document.getElementById(cursorIndex)?.scrollIntoViewIfNeeded();
    const el = document.querySelector(`.search-field [data-id="${cursorIndex}"]`);
    if (el) {
      scrollIntoView(el, {
        scrollMode: 'if-needed',
        block: 'end'
      });
    }
  }, [cursorIndex]);

  useEffect(() => {
    if (!opened) return;
    const results = options.filter((option) => option.includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    console.log('compoent rendered the first time!');
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []); // <- the dependency array. In this array we store the varaibla we want to watch

  function findFirst(term) {
    if (term.length < 1) return '';
    const result = options.find((option) => option.startsWith(term.toLowerCase()));
    return result || '';
  }

  function handleInput(input) {
    setSearchTerm(input);
    setSelectedItem(input);
    setOpened(false);
  }

  return (
    <div className={opened ? 'search-field' : 'search-field rounded'} ref={container}>
      <span className='search-icon'></span>
      <input className='input-mask' disabled value={findFirst(searchTerm)} />
      <input
        className='input-real'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (e.target.value === '') handleInput('');
          setCursorIndex(-1);
          setOpened(true);
        }}
        onClick={() => {
          setOpened(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const result = findFirst(e.target.value);
            const hovered = document.querySelector('.search-field .hover');
            if (hovered) {
              handleInput(hovered.textContent);
              setOpened(false);
              return;
            }
            if (result) {
              handleInput(result);
            }
          }

          if (e.key === 'ArrowDown') {
            setOpened(true);
            setCursorIndex(cursorIndex < searchResults.length - 1 ? cursorIndex + 1 : cursorIndex);
          }
          if (e.key === 'ArrowUp') {
            setOpened(true);
            setCursorIndex(cursorIndex > 0 ? cursorIndex - 1 : cursorIndex);
          }
        }}
      />
      {opened && (
        <div className='options'>
          {searchResults.map((option, index) => (
            <button
              key={option}
              data-id={index}
              onClick={() => {
                handleInput(option);
              }}
              className={`option ${index === cursorIndex ? 'hover' : ''}`}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
