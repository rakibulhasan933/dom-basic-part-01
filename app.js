// Array of image URLs
const imgs = [
    "https://i.ibb.co.com/DbHR9Dk/Screenshot-2024-07-15-183910.png", // URL of the first image
    "https://i.ibb.co.com/9yqZTJ8/Screenshot-2024-07-15-182540.png", // URL of the second image
    "https://i.ibb.co.com/6D1c3jv/doctor-protal.png",               // URL of the third image
    "https://i.ibb.co.com/vvvZXNS/car-cleaning.jpg",                 // URL of the fourth image
    "https://i.ibb.co.com/YXzb4vR/office-cleaning.jpg",              // URL of the fifth image
    "https://i.ibb.co.com/DMkYCnK/Screenshot-2022-08-01-113629.png", // URL of the sixth image
    "https://i.ibb.co.com/6D1c3jv/doctor-protal.png",               // URL of the seventh image (repeated)
    "https://i.ibb.co.com/vvvZXNS/car-cleaning.jpg",                 // URL of the eighth image (repeated)
    "https://i.ibb.co.com/YXzb4vR/office-cleaning.jpg",              // URL of the ninth image (repeated)
    "https://i.ibb.co.com/DMkYCnK/Screenshot-2022-08-01-113629.png", // URL of the tenth image (repeated)
    "https://media.4-paws.org/.../VIER%20PFOTEN_2017.jpg",          // URL of the eleventh image
    "https://blog.lovellsoccer.co.uk/2024/.../Messi.jpg",           // URL of the twelfth image
    "https://i.ibb.co.com/Lgft81q/pexels-mohdatir.jpg",             // URL of the thirteenth image
    "https://i.ibb.co.com/MRW1T1M/code.jpg"                         // URL of the fourteenth image
];

// Select the container element where images will be added
const boxContainer = document.getElementById("box-container");

// Style the container to make it visually distinct
boxContainer.style.border = "4px solid blue"; // Adds a blue border around the container
boxContainer.style.padding = "50px";         // Adds padding inside the container

// Function to display all images from the array in the container
function showContent() {
    imgs.forEach((img) => { // Loop through each image URL in the array
        const box = document.createElement("div"); // Create a new `div` element for each image
        box.style.border = "3px solid green";      // Add a green border to the `div`
        box.style.borderRadius = "8px";           // Make the corners of the `div` rounded
        box.innerHTML = ` <img src="${img}" width="500" height="300" loading="lazy" alt="">`; // Add the image to the `div`
        boxContainer.append(box); // Add the `div` to the container
    });
}

// Select the element with the ID `datetime`
const datetime = document.getElementById("datetime");

// When the `datetime` element is clicked, run the `showContent` function
datetime.addEventListener("click", showContent);

// Another event: When the `datetime` element loses focus (blur event), run the same code
datetime.addEventListener("blur", function () {
    imgs.forEach((img) => { // Loop through each image URL in the array
        const box = document.createElement("div"); // Create a new `div` element for each image
        box.style.border = "3px solid green";      // Add a green border to the `div`
        box.style.borderRadius = "8px";           // Make the corners of the `div` rounded
        box.innerHTML = ` <img src="${img}" width="500" height="300" loading="lazy" alt="">`; // Add the image to the `div`
        boxContainer.append(box); // Add the `div` to the container
    });
});
