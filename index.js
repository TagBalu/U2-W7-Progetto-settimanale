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
      }
    })
    .then((products) => {
      console.log(products);
      const col = document.getElementById("products-container");

      products.forEach((app) => {
        const name = document.createElement("div");
        name.classList.add("card-body d-flex flex-column justify-content-between");
        name.innerText = app.name;
        col.appendChild(name);
        const description = document.createElement("h4");
        description.classList.add("card-title");
        description.innerText = app.description;
        col.appendChild(description);
        const brand = document.createElement("p");
        brand.classList.add("card-text");
        brand.innerText = app.brand;
        col.appendChild(brand);
        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = app.imageUrl;
        image.alt = app.name;
        image.style.width = "200px";
        image.style.objectFit = "cover";
        col.appendChild(image);
        const price = document.createElement("p");
        price.innerText = app.price;
        col.appendChild(price);
      });
    })
    .catch((error) => console.log(error));
};

window.onload = function () {
  getProdcuts();
};
