// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { cats } from './cats-data.js';
import { renderCatEl } from './render-cats.js';

const catsList = document.getElementById('cats-list');

import { sports } from './sports.js';
import { renderSports } from './render-sports.js';

const sportsListEl = document.getElementById('sports-list');

for (let cat of cats) {
  const catEl = renderCatEl(cat);
  catsList.append(catEl);
};

for (let sport of sports) {
  const sportsEl = renderSports(sport);
  sportsListEl.append(sportsEl)

}

