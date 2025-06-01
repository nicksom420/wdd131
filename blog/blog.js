const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const articleContainer = document.getElementById('articles-container');
const article = document.createElement('article');
article.className('book-entry');
articleContainer.appendChild(article);
const articleContent = `<article class="book-entry">
                <div class="book-info">
                    <h2>${item.date}</h2>
                    <h2>${item.ages}</h2>
                    <h2>${item.genre}</h2>
                    <h2>${item.stars}</h2>
                </div>
                <div class="book-display" id="maincontent">
                    <h2>${item.title}</h2>
                    <img ${item.imgSRC} ${imgAlt}>
                    <p>${item.description}</p>
                </div>
            </article>`;

article.innerHTML = articleContent

function buildArticle()

