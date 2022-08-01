export function renderSports(sport) {
    const sportEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    
    nameEl.textContent = sport.name;
    emojiEl.textContent = sport.emoji;
    
    sportEl.classList.add('eachSport');
    
    sportEl.append(nameEl, emojiEl);
        
    return sportEl;
}

