export function renderFoods(food) {
    const foodEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const typeEl = document.createElement('p');
    const healthyEl = document.createElement('p');
    const priceEl = document.createElement('p');

    foodEl.classList.add('food');

    nameEl.textContent = food.name;
    typeEl.textContent = food.type;
    healthyEl.textContent = food.healthy;
    priceEl.textContent = food.expensive;

    foodEl.append(nameEl, typeEl, healthyEl, priceEl);

    return foodEl;
}