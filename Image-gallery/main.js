let imageContainer = document.querySelector(".image-container");

fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((value) => {
      imageContainer.innerHTML += `
      <div class="img">
      <img src="${value.path}" alt="${value.title}" >
      </div>
      `;
    });
  })
  .catch((error) => console.error(error));
