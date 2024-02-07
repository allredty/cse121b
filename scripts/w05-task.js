/* W05: Programming Tasks */
const templesElement = document.querySelector('#temples');

/* Declare and initialize global variables */
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const headingThree = document.createElement("h3");
        const image = document.createElement("img");
        headingThree.textContent = temple.templeName;
        image.src = temple.imageUrl;
        image.alt = temple.location;
        article.appendChild(headingThree);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
async function getTemples() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        templeList.push(...data);
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    const templesElement = document.querySelector("#temples");
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* filterTemples Function */
const filtered = (temples) => {
    reset();

    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(
                temples.filter((temple) => temple.location.includes("Utah"))
            );
            break;
        case "notutah":
            displayTemples(
                temples.filter((temple) => !temple.location.includes("Utah"))
            );
            break;
        case "older":
            displayTemples(
                (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
            );
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error("Invalid filter value");
        }
    };


/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
    filtered(templeList);
})

getTemples();