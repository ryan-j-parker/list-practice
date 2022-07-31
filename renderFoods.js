export function renderFoods(food) {
    const foodEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const typeEl = document.createElement('p');
    const healthyEl = document.createElement('p');
    const restaurantEl = document.createElement('p');
    const imageEl = document.createElement('img');

    foodEl.classList.add('food');
    imageEl.classList.add('food-image');

    nameEl.textContent = food.name;
    typeEl.textContent = `originates from ${food.type}.`;
    healthyEl.textContent = `and is a ${food.healthy} food.`;
    restaurantEl.textContent = `better from a restaurant? ${food.restaurant}.`;

    imageEl.src = food.image;

    foodEl.append(nameEl, typeEl, healthyEl, restaurantEl, imageEl);

    return foodEl;
}