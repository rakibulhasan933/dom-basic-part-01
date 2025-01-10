// Step 1: Define an array of fruits
// This array contains a list of fruit names that we will display as clickable links.
const fruits = ["Banana", "Orange", "Apple", "Mango", "jac", "rice"];

// Step 2: Select the "foods" container and set its background color
// The element with id="foods" will have a green background.
const foodsContainer = document.getElementById("foods");
foodsContainer.style.backgroundColor = "green"; // Apply green background

// Step 3: Select the "container" element and set its background color
// The element with id="container" will have a blue background.
document.getElementById("container").style.backgroundColor = "blue"; // Apply blue background

// Step 4: Loop through the fruits array and create clickable links
// For each fruit in the array, create an <a> element and add it to the "foods" container.
fruits.forEach((item) => {
    const buttonContainer = document.createElement("a"); // Create an <a> element
    buttonContainer.innerHTML = `<a href="${item}">${item}</a>`; // Add a clickable link
    foodsContainer.append(buttonContainer); // Append the link to the "foods" container
});

// Step 5: Create and add a "Login" button
// Dynamically create a button with the text "Login" and add it to the page.
const btn = document.createElement("button"); // Create a <button> element
btn.innerHTML = "Login"; // Set the button's text to "Login"
document.body.appendChild(btn); // Append the button to the end of the body

// Step 6: Define a navbar array for menu links
// This array contains menu items, each with a "name" (label) and a "path" (URL).
const navbar = [
    { name: "Home", path: "/" },
    { name: "Products", path: "products" },
    { name: "Services", path: "services" },
    { name: "Contact Us", path: "contact" }
];

// Step 7: Select the "navbar" container and populate it with menu links
// Loop through the navbar array to create and add menu links to the "navbar" container.
const navContainer = document.getElementById("navbar");
navbar.forEach((item) => {
    const link = document.createElement("div"); // Create a <div> element
    link.innerHTML = `<a href="${item.path}">${item.name}</a>`; // Add a clickable menu link
    navContainer.append(link); // Append the link to the "navbar" container
});
