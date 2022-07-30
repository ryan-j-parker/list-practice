export function renderVideoGames(videoGames) {
    const videoGameEl = document.createElement('div');
    const titleOneEl = document.createElement('h3');
    const titleTwoEl = document.createElement('h3');
    const yearReleasedEl = document.createElement('p');
    const developerEl = document.createElement('p');
    const genresEl = document.createElement('ul');
    const coverEl = document.createElement('img');

    titleOneEl.textContent = videoGames.title1;
    titleTwoEl.textContent = videoGames.title2;
    yearReleasedEl.textContent = `released in ${videoGames.yearReleased}`;
    developerEl.textContent = `developed by: ${videoGames.developer}`;

    coverEl.src = videoGames.cover;
    videoGameEl.append(coverEl);
    videoGameEl.classList.add('video-game');
    videoGameEl.append(titleOneEl, titleTwoEl, yearReleasedEl, developerEl, genresEl, coverEl);

    for (let genre of videoGames.genres) {
        const genreEl = document.createElement('li');
        genreEl.textContent = `🎮 ${genre}`;
        genresEl.append(genreEl);
    }
    return videoGameEl;
}