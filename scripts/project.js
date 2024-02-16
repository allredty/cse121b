const catAPI = {
  async fetchRandomCat() {
    const apiUrl = `https://api.thecatapi.com/v1/images/search`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data[0].url;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
};

async function handleButtonClick() {
  const catImage = document.getElementById("cat-pic");
  const randomCatImageURL = await catAPI.fetchRandomCat();

  if (randomCatImageURL) {
    catImage.src = randomCatImageURL;
  } else {
    catImage.src = "";
  }
}

document
  .getElementById("get-cat-button")
  .addEventListener("click", handleButtonClick);
