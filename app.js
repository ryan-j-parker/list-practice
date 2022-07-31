import { sports } from './sports.js';
import { renderSports } from './render-sports.js';

const sportsListEl = document.getElementById('sports-list');

for (let sport of sports) {
    const sportsEl = renderSports(sport);
    sportsListEl.append(sportsEl);
}

import { favoriteFoods } from './favoriteFoods.js';
import { renderFoods } from './renderFoods.js';
const foodsListEl = document.getElementById('foods-list');

for (let food of favoriteFoods) {
    const foodEl = renderFoods(food);  
    foodsListEl.append(foodEl);
}

// 1. create an array - export
// 2. import array into app.js
// 3. make dom for section
// 4. make for of loop
// 5. render and append
// 6. add in text content and classlist
// 7. create separate render function
// 8. plug function back into the loop

import { cats } from './cats.js';
import { renderCats } from './render-cats.js';

const catsList = document.getElementById('cats-list');

for (let cat of cats) {
    const catEl = renderCats(cat);
    catsList.append(catEl);
}


import { videoGames } from './video-games.js';
import { renderVideoGames } from './render-video-games.js';

const videoGamesList = document.getElementById('video-games-list');

for (let game of videoGames) {
    const videoGameEl = renderVideoGames(game);
    videoGamesList.append(videoGameEl);
}


