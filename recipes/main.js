import recipes from './recipes.mjs';

function random(number)
{
    return Math.floor(Math.random()*number)
}

function getRandomListEntry(list) 
{
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe)
{
    return `<div id="recipe-card">
            <img src="${recipe.image}" alt="recipe-image">
            <div class="recipe-text">
                <ul id="tags">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <h1 id="recipe-title">${recipe.name}</h1>
                ${ratingTemplate(recipe.rating)}
                <p id="description">'${recipe.description}</p>
            </div>
        </div>`
}

function tagsTemplate(tags)
{
    let html = ""
    tags.forEach(tag => {
        html += `<li class="tag">${tag}</li>`
    });

    return html
}

function ratingTemplate(rating)
{
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }  
    }

    html += `</span>`
    return html;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {

    let outputElement = document.getElementById("recipe-container")

    outputElement.innerHTML = '';

    recipeList.forEach(recipe => {
        outputElement.innerHTML += recipeTemplate(recipe)
    });

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit',searchHandler)

function searchHandler(e) {
    e.preventDefault()
    const searchElement = document.getElementById('search-input');
    const searchContent = searchElement.value;
    let query = searchContent.toLowerCase();
    let filteredList = filter(query);
    renderRecipes(filteredList)
}


function filter(query)
{
    const filtered = recipes.filter(recipe => recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) || recipe.tags.find((item) => item.toLowerCase().includes(query))
    || recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))
    )

    const sorted = filtered.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });

    return sorted
}

