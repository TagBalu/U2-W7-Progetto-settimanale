const URL = "https://striveschool-api.herokuapp.com/api/product/";

const getProdcuts = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0ODdiMzFjMjUwNDAwMTUxYWI2N2IiLCJpYXQiOjE3NDYxNzU5MjMsImV4cCI6MTc0NzM4NTUyM30.EWKIVxz1oR6-xD_SWztuF7cjLTMyO9VjvI8x4HyAzrc"
    }
  })
    .then((resp) => {
      console.log(resp);
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Failed to fetch products");
      }
    })
    .then((products) => {
      const productsContainer = document.getElementById("products-container");
      if (!productsContainer) {
        console.error("Element with ID 'products-container' not found in the DOM.");
        return;
      }
      productsContainer.innerHTML = "";
      products.forEach((product) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = product.imageUrl;
        img.alt = product.name;
        img.className = "card-img-top";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = product.name;

        const cardDescription = document.createElement("p");
        cardDescription.className = "card-text";
        cardDescription.innerText = product.description;

        const cardPrice = document.createElement("p");
        cardPrice.className = "card-text";
        cardPrice.innerHTML = `<strong>Price:</strong> €${product.price}`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDescription);
        cardBody.appendChild(cardPrice);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        productsContainer.appendChild(col);
      });
    })
    .catch((error) => console.log(error));
};

window.onload = function () {
  getProdcuts();
};
