handleResize(); // calling the second the page loads
const button = document.querySelector('.menu-button'); 

function toggleMenu() { // toggles the menu on and off by adding and removing the hide class to the list thats a part of the menu class
    console.log("Button Clicked");
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

button.addEventListener("click", toggleMenu); 

function handleResize() { // Adds a condition if the window is more than 1000 pixels than it will show the menu options
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide')
        console.log("menu shown")
    }
    else {
        menu.classList.add("hide")
        console.log("menu hidden")
    }
}

window.addEventListener("resize", handleResize);

function galleryModal(event) { // adds the model when you click on an image by adding the dialog html element and swapping image sources
    const selectedImage = event.target.closest("img");

    imageSource = selectedImage.src;
    imageAlt = selectedImage.alt;

    const largeImageSrc = imageSource.split('-')[0] + "-full.jpeg"

    const modal = document.createElement("dialog");
    modal.classList.add("modal");

    modal.innerHTML = `<img src="${largeImageSrc}" alt ="${imageAlt}"> <button class="close-viewer">X</button>`;

    document.body.appendChild(modal)
    modal.showModal();

    const closeModal = modal.querySelector(".close-viewer");
    closeModal.addEventListener("click", function() {
        exitModal(modal);
    });

}

function exitModal(dialog) {
    dialog.close()
}

document.querySelector(".gallery").addEventListener("click", galleryModal);

