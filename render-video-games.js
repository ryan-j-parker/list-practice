export function renderVideoGames(videoGames) {
    const videoGameEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const yearReleasedEl = document.createElement('p');
    const genresEl = document.createElement('ul');
    const coverEl = document.createElement('img');

    titleEl.textContent = videoGames.title;
    yearReleasedEl.textContent = videoGames.yearReleased;
    genresEl.textContent = videoGames.genres;
    coverEl.textContent = videoGames.cover;

    coverEl.src = videoGames.cover;
    videoGameEl.classList.add('video-game');
    videoGameEl.append(titleEl, yearReleasedEl, genresEl, coverEl);

    for (let genre of videoGames.genres) {
        const genreEl = document.createElement('li');
        genreEl.textContent = genre;
        genresEl.append(genreEl);
    }
    return videoGameEl;
}