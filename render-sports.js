export function renderSportsItem(sport) {
    const pTag = document.createElement('p';)
    pTag.textContent = sport;
    pTag.classList.add('aSport');
    return pTag;
function renderSports(sportsGame) {
    const pTag = document.createElement('p');
    pTag.textContent = sportsGame;
    pTag.classList.add('aSport');
    return pTag;
}