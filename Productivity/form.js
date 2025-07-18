// Functions specific to form.html

import defaultEntries from './entries.mjs';

function loadEntries() {
  const existingEntries = localStorage.getItem('entries');
  if (existingEntries) { // makes sure it loads saved entries and not default everytime unless there is no new entries added
    return JSON.parse(existingEntries);
  } else {
    localStorage.setItem('entries', JSON.stringify(defaultEntries));
    return defaultEntries;
  }
}

let entries = loadEntries();


document.querySelector("form").addEventListener("submit",function(event) {
    event.preventDefault();

    const date = document.getElementById("date-input").value;
    const description = document.getElementById("description-input").value;
    const fileInput = document.getElementById("image-input"); // stores the file object within the variable
    const file = fileInput.files[0] // since most of the time you can select multiple files, since we can't it will always be at index 0

    // If the user doesn't put an image the image is null
    if (!file) {
        const entry = {date,description,image: null}; // javascript object literal
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
        return;
    }

    const reader = new FileReader(); // filereader object
    reader.onload = function() { // once the file is read onlead is called once its finished
        const base64 = reader.result; // it stores the result into a variable

        const entry = { // creates the new object with the date description and read image
            date,
            description,
            image: base64
        };

        entries.push(entry) // we add it to the list of entries
        localStorage.setItem('entries', JSON.stringify(entries));
    };

    reader.readAsDataURL(file);// Asynchronous function, runs when .onload is identified. It does not wait until the file is read to execute
    // this function can store the image into a url or string itself and into a variable, so that the image can be transfered without having to be stored locally or on a server first.
});