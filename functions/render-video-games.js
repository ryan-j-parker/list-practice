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
    yearReleasedEl.textContent = `was released in ${videoGames.yearReleased}`;
    developerEl.textContent = `and was developed by ${videoGames.developer}`;
    genresEl.textContent = `and falls into the following genres:`;
    coverEl.src = videoGames.cover;

    videoGameEl.classList.add('video-game');
    

    videoGameEl.append(coverEl);
    videoGameEl.append(titleOneEl, titleTwoEl, yearReleasedEl, developerEl, genresEl, coverEl);

    for (let genre of videoGames.genres) {
        const genreEl = document.createElement('li');
        genreEl.textContent = `🎮 ${genre}`;
        genresEl.append(genreEl);
    }
    return videoGameEl;
}