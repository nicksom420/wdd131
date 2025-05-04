const themeSelector = document.querySelector("select"); // store the individual element in a variable to be used 
function changeTheme() {
    const currentValue = themeSelector.value; // get the value of the select element
    const body = document.querySelector("body"); // define the body and store it in a varibale so it can be edited
    const image = document.querySelector("img");// define the image element and store it to be edited

    if (currentValue == "dark") // if condition to check if the value of the select element is dark
    {
        body.classList.add("dark");// adds the attribute class "dark" to the body element
        image.src = "byui-logo_white.png"; // changes the src attribute of the image element
    }
    else
    {
        body.classList.remove("dark") // removes the class dark
        image.src = "byui-logo_blue.webp"; // changes the src to the blue image
    }
}

themeSelector.addEventListener('change', changeTheme); // an event listener to check if the user changes the select option

