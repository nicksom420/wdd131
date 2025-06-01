const articles = [
{
id: 1,
title: "Septimus Heap Book One: Magyk",
date: "July 5, 2022",
description:
"If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
imgAlt: "Book cover for Septimus Heap 1",
ages: "10-14",
genre: "Fantasy",
stars: "****"
},
{
id: 2,
title: "Magnus Chase Book One: Sword of Summer",
date: "December 12, 2021",
description:
"The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
imgSrc:
"https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
imgAlt: "Book cover for Magnus Chase 1",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐"
},
{
id: 3,
title: "Belgariad Book One: Pawn of Prophecy",
date: "Feb 12, 2022",
description:
"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
imgSrc:
"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
imgAlt: "Book cover for Pawn of Prophecy",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐⭐"
}
];

function buildArticle(articles)
{
    const articleContainer = document.getElementById('articles-container'); //Stores the article container in a variable
    articles.forEach(function(item) // Loops through each article in the list to be added
    {
        const article = document.createElement('article'); //Creates a new article element
        article.classList.add('book-entry'); //Adds it to the class so that css will apply
        const articleContent = `
                    <div class="book-info">
                        <h2>${item.date}</h2>
                        <h2>${item.ages}</h2>
                        <h2>${item.genre}</h2>
                        <h2>${item.stars}</h2>
                    </div>
                    <div class="book-display" id="maincontent">
                        <h2>${item.title}</h2>
                        <img src="${item.imgSrc}" alt="${item.imgAlt}">
                        <p>${item.description}</p>
                    </div>
            `; // Stores the html to be added as well as the items attributes 
        article.innerHTML = articleContent //Converts it to HTML 
        articleContainer.appendChild(article); // Adds it to the page

    });
}

buildArticle(articles)

