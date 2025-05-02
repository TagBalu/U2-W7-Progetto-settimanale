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

      const row = document.querySelector(".products-container");
      products.array.forEach((products) => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-lg-3 mb-4";
        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm";
        const imageUrl = document.createElement("img");
      });
    })
    .catch((error) => console.log(error));
};

window.onload = function () {
  getProdcuts();
};
