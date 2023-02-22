import { createRoot } from 'react-dom/client';
import React, { StrictMode, useState } from 'react';
import Counter from './components/Counter/Counter';

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
  const [counterValue, setCounterValue] = useState(0);
  // JSX is a special syntax that allows us to write HTML-like syntax
  // inside of our JavaScript files
  return (
    <div className='flex-center'>
      <h1 style={{ textAlign: 'center' }}>Rendered</h1>
      <h1 style={{ textAlign: 'center' }}>count: {counterValue}</h1>
      <Counter min={0} max={10} onChange={setCounterValue} />
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
