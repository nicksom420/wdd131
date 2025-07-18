import defaultEntries from './entries.mjs';
// Functions specific to the main page index.html

function loadEntries() { // Since each page is a separate javascript environment. I need to share them through local storage
  const existingEntries = localStorage.getItem('entries');
  if (existingEntries) {
    return JSON.parse(existingEntries);
  } 
  else {
    localStorage.setItem('entries', JSON.stringify(defaultEntries));
    return defaultEntries;
  }
}

let entries = loadEntries();

// Display Logic
function displayEntries(entriesToDisplay) {

    let outputElement = document.getElementById("entry-container")

    outputElement.innerHTML = '';

    entriesToDisplay.forEach(entry => {
        outputElement.insertAdjacentHTML("beforeend",entryTemplate(entry))
    });

}

function entryTemplate(entry)
{
    return ` <div class="entry">
                <h1 class="date">${entry.date}</h1>
                <p class="description">${entry.description}</p>
                ${entry.image ? `<img class="image" src="${entry.image}" alt="entry-image" width="200" height="100">` : ''}
            </div>`;
            // If there is an image put the correct html in, if there is not leave blank ''
}

//search logic

const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('input', function(event) { // anonymous callback function that the browser calls when the keydown event is called
    const query = searchInput.value.trim();
    if (query === '') {
        displayEntries(entries) // If the search bar is empty display all entries
    }
    else {
        search(query); // display according to query
    }
});

function search(query) { // filters the list of entries by the entered date
    const filtered = entries.filter(entry => entry.date.includes(query));
    displayEntries(filtered);

}

// select filter logic

const filterSelect = document.getElementById('filter')

filterSelect.addEventListener('change', function(event) {
    const selectedOption = event.target.value;
    
    chronologicalSort(selectedOption);
});

function chronologicalSort(order) {
    if (order == 'newest') {
        const sortedEntries = entries.sort((a, b) => {
        const dateA = new Date(a.date); // since we can use them as date objects we can just compare the objects
        const dateB = new Date(b.date);
        return dateB - dateA; // newest to oldest
        });
        displayEntries(sortedEntries);
    } 
    else if (order == 'oldest') {
        const sortedEntries = entries.sort((a, b) => {
        const dateA = new Date(a.date); 
        const dateB = new Date(b.date);
        return dateA - dateB; // oldest to newest
        });
        displayEntries(sortedEntries);
    }
}

function init() {
  chronologicalSort('newest'); // makes it so that by default the page is displayed newest to oldest

}

document.addEventListener('DOMContentLoaded', init); // calls the init function when the page is loaded 







