const URL = "https://striveschool-api.herokuapp.com/api/product/";
const form = document.getElementById("product-form");

form.onsubmit = function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const imageUrlInput = document.getElementById("imageUrl");
  const priceInput = document.getElementById("price");

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageUrlInput.value,
    price: priceInput.value
  };
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0ODdiMzFjMjUwNDAwMTUxYWI2N2IiLCJpYXQiOjE3NDYxNzU5MjMsImV4cCI6MTc0NzM4NTUyM30.EWKIVxz1oR6-xD_SWztuF7cjLTMyO9VjvI8x4HyAzrc"
    }
  });
  console.log("SUBMIT", newProduct);
};
