// Define an array of fruits
const fruits = ["Banana", "Orange", "Apple", "Mango", "jac", "rice"];

// Select the element with the id "foods" and change its background color
const foodsContainer = document.getElementById("foods");
foodsContainer.style.backgroundColor = "green"; // Set background color to green

// Select the element with the id "container" and change its background color
document.getElementById("container").style.backgroundColor = "blue"; // Set background color to blue

// Loop through the fruits array and create links for each fruit
fruits.forEach((item) => {
    // Create a new <a> element
    const buttonContainer = document.createElement("a");

    // Set the inner HTML of the <a> element to include a link with the fruit name
    buttonContainer.innerHTML = `
    <a href="${item}">${item}</a>
    `;

    // Append the new <a> element to the foods container
    foodsContainer.append(buttonContainer);
});

// Create a new button element
const btn = document.createElement("button");
btn.innerHTML = "Login"; // Set the button's text to "Login"

// Append the button to the end of the document body
document.body.appendChild(btn);
