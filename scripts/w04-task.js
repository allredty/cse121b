/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

/* Name */
myProfile.name = "Tyler Allred";

/* Photo with attributes */
myProfile.photo = "./images/tyler.jpg";


/* Populate Profile Object with placesLive objects */
myProfile.favoriteFoods = [
    "Enchiladas",
    "Taco Bell",
    "Pizza"
];
myProfile.hobbies = [ "Reading", "Writing", "Lego"];
myProfile.placesLived = [];

myProfile.placesLived.push(
    {
        place: "Del Rio, Texas",
        length: "20 Years",
    }
);

myProfile.placesLived.push(
    {
        place: "Rexburg, Idaho",
        length: "2 Years"
    }
);

/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;

document.querySelector("#photo").src = myProfile.photo;

document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

