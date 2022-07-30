
/*export function renderSports(sport) {
    const pTag = document.createElement('p');
    pTag.textContent = sport;
    pTag.classList.add('sport');
    return pTag;
}
*/

export function renderCats(cat) {
    const catEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const ageEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const favoritesEl = document.createElement('div');
    const personEl = document.createElement('p');
    const toyEl = document.createElement('p');
    const treatsEl = document.createElement('p');

    nameEl.textContent = cat.name;
    ageEl.textContent = `is ${cat.age} years old`;
    colorEl.textContent = `with a ${cat.color} coat`;
    favoritesEl.textContent = 'favorite things:';
    personEl.textContent = `person: ${cat.favorites.person}`;
    toyEl.textContent = `toy: ${cat.favorites.toy}`;
    treatsEl.textContent = `treat: ${cat.favorites.treats}`;

    catEl.classList.add('cat');

    favoritesEl.append(personEl, toyEl, treatsEl);
    catEl.append(nameEl, ageEl, colorEl, favoritesEl);

    return catEl;
}
