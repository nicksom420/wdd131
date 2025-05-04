const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200")
newImage.setAttribute("alt", "image added via Javascript")
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
document.body.appendChild(newSection);

const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);

const newParagraph2 = document.createElement("p")
newParagraph2.innerText = "This was added through Javascript"
newSection.appendChild(newParagraph2)
