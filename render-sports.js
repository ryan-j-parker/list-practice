export function renderSports(sport) {
    const pTag = document.createElement('p');
    pTag.textContent = sport;
    pTag.classList.add('aSport');
    return pTag;
}

