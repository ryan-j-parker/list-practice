export function renderFoods(food) {
    const foodEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const typeEl = document.createElement('p');
    const healthyEl = document.createElement('p');
    const deliciousEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const imageEl = document.createElement('img');

    foodEl.classList.add('food');
    imageEl.classList.add('food-image');

    nameEl.textContent = food.name;
    typeEl.textContent = `I could find ${food.name} at a ${food.type} restaurant.`;
    healthyEl.textContent = `Eating a ${food.name} would be ${food.healthy} healthy,`;
    deliciousEl.textContent = `and it would probably be ${food.delicious} delicious.`;
    ratingEl.textContent = `I'd eat ${food.name}. ${food.rating}/5 stars.`;

    imageEl.src = food.image;

    foodEl.append(nameEl, typeEl, healthyEl, deliciousEl, ratingEl, imageEl);

    return foodEl;
}