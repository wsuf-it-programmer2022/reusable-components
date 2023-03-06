import { createRoot } from 'react-dom/client';
import React, { StrictMode, useState } from 'react';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import Dropdown from './components/Dropdown/Dropdown';

const dropdownOptions = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'bell pepper',
  'bilberry',
  'blackberry',
  'blackcurrant',
  'blood orange',
  'blueberry',
  'boysenberry',
  'breadfruit',
  'canary melon',
  'cantaloupe',
  'cherimoya',
  'cherry',
  'chili pepper'
];

const options = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'bell pepper',
  'bilberry',
  'blackberry',
  'blackcurrant',
  'blood orange',
  'blueberry',
  'boysenberry',
  'breadfruit',
  'canary melon',
  'cantaloupe',
  'cherimoya',
  'cherry',
  'chili pepper',
  'clementine',
  'cloudberry',
  'coconut',
  'cranberry',
  'cucumber',
  'currant',
  'damson',
  'date',
  'dragonfruit',
  'durian',
  'eggplant',
  'elderberry',
  'feijoa',
  'fig',
  'goji berry',
  'gooseberry',
  'grape',
  'grapefruit',
  'guava',
  'honeydew',
  'huckleberry',
  'jackfruit',
  'jambul',
  'jujube',
  'kiwi fruit',
  'kumquat',
  'lemon',
  'lime',
  'loquat',
  'lychee',
  'mandarine',
  'mango',
  'mulberry',
  'nectarine',
  'nut',
  'olive',
  'orange',
  'papaya',
  'passionfruit',
  'peach',
  'pear',
  'persimmon',
  'physalis',
  'pineapple',
  'plum',
  'pomegranate',
  'pomelo',
  'purple mangosteen',
  'quince',
  'raisin',
  'rambutan',
  'raspberry',
  'redcurrant',
  'rock melon',
  'salal berry',
  'satsuma',
  'star fruit',
  'strawberry',
  'tamarillo',
  'tangerine',
  'tomato',
  'ugli fruit',
  'watermelon'
];

// kebab-case: for css
// camelCase : for js
// PascalCase : for React components

// this is a react component because
// it starts with a capital letter
// and it returns JSX
const App = () => {
  const myObj = { a: 2, b: 4 };
  // javascript feature: object destructuring
  const { a } = myObj;

  const myArr = [3, 5];
  const [x, y] = myArr;

  // The input parameter of useState is the initial value
  // of our state.
  // useState function always returns an array of two elemnts;
  // the first element of the array is the state variable
  // second element of the array is a function which sets the value
  // of that state variable
  const [counterValue, setCounterValue] = useState(0);
  // JSX is a special syntax that allows us to write HTML-like syntax
  // inside of our JavaScript files

  // this line:
  // React.createElement('div', { id: 'my-app' }, 'This is my app');
  // equivalent to:
  // <div id="my-app">This is my app</div>

  return (
    <div className='flex-center'>
      {/* <Header title='This is my title' /> */}
      <h1 style={{ textAlign: 'center' }}>count: {counterValue}</h1>
      <Counter min={0} max={10} onChange={setCounterValue} />
      <Dropdown options={dropdownOptions} />
    </div>
  );
};

// https://reactjs.org/docs/strict-mode.html
const container = document.getElementById('root');
const root = createRoot(container);
// SctrictMode renders the component twice!!
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
