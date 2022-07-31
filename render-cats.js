export function renderCats(cat) {
    const catEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const whoseEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const favoritesEl = document.createElement('div');
    const peopleEl = document.createElement('ul');
    const toyEl = document.createElement('p');
    const treatsEl = document.createElement('p');
    const mugshotEl = document.createElement('img');

    nameEl.textContent = cat.name;
    whoseEl.textContent = `is ${cat.whose} cat,`;
    ageEl.textContent = `${cat.name} is ${cat.age} years old`;
    colorEl.textContent = `and has a ${cat.color} coat.`;
    favoritesEl.textContent = `Some of ${cat.name}'s favorite things are`;
    peopleEl.textContent = `hanging out with`;    
    toyEl.textContent = `playing with their ${cat.favorites.toy},`;
    treatsEl.textContent = `and ${cat.name} really likes to eat ${cat.favorites.treats}`;

    mugshotEl.src = cat.mugshot;
    catEl.append(mugshotEl);
    catEl.classList.add('cat');
    nameEl.classList.add('cat-name');

    for (let person of cat.favorites.people) {
        const personEl = document.createElement('li');
        personEl.textContent = `🐱 ${person}`;
        peopleEl.append(personEl);
    }

    favoritesEl.append(peopleEl, toyEl, treatsEl);
    catEl.append(nameEl, whoseEl, ageEl, colorEl, favoritesEl);

    return catEl;
}
