/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Tyler Allred"
const Year = new Date();
let currentYear = Year.getFullYear();
let profilePicture = ("./images/tyler.jpg");

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector(`img`);

/* Step 4 - Adding Content */
imageElement.innerHTML = fullName;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let fav_food = ["Enchiladas", "Taco Bell", "Smoothies"];
let oneMoreFood = "Pizza";
fav_food.push(oneMoreFood);
foodElement.innerHTML += `<br>${fav_food}`;
fav_food.shift();
foodElement.innerHTML += `<br>${fav_food}`;
fav_food.pop();
foodElement.innerHTML += `<br>${fav_food}`;
