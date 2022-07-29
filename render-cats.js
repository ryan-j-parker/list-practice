export function renderCatEl(anyCat) {
    const pTag = document.createElement('p');
    pTag.textContent = `${anyCat.name} is ${anyCat.age} years old, and likes to eat ${anyCat.favorites.treats} after playing with ${anyCat.favorites.toy}`;
    pTag.classList.add('cat');
}