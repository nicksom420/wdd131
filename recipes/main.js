import recipes from './recipes.mjs';

function random(number)
{
    return Math.floor(Math.random()*number)
}

function getRandomEntry(list) 
{
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe)
{
    return `<div id="recipe-container">
            <img src="images/sweet-potato-waffle-md.jpg" alt="sweet-potato-waffle">
            <div class="recipe-text">
                <ul id="tags">
                    <li class="tag">Waffles</li>
                    <li class="tag">Sweet Potato</li>
                    <li class="tag">Side</li>
                </ul>
                <h1 id="recipe-title">${recipe.name}</h1>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star-empty">⭐</span>
	                <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
                <p id="description">'${recipe.description}'</p>
            </div>
        </div>`
}

function tagsTemplate(tags)
{
    tags.forEach(tag => {
        const htmlString = `<li class="tag">${tag}</li>`;
        document.getElementById("tags").insertAdjacentHTML("beforeend",htmlString);
    });
}

function ratingTemplate(rating)
{

}