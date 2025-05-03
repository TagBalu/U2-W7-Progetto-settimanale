const URL = "https://striveschool-api.herokuapp.com/api/product/";
const form = document.getElementById("product-form");
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
      const productsList = document.getElementById("products-list");
      if (!productsList) {
        console.error("Element with ID 'products-container' not found in the DOM.");
        return;
      }
      productsList.innerHTML = "";
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
        productsList.appendChild(col);
      });
    })
    .catch((error) => console.log(error));
};

window.onload = function () {
  getProdcuts();
};
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
  })
    .then((response) => {
      if (response.ok) {
        console.log("Prodotto aggiunto con successo:", newProduct);
        alert("Prodotto aggiunto con successo!");
        form.reset();
        fetchProducts();
      } else {
        throw new Error("Errore nell'aggiunta del prodotto");
      }
    })
    .catch((error) => console.error("Errore:", error));
  console.log("SUBMIT", newProduct);
};
const deleteButton = document.getElementById("delete-btn");
deleteButton.onclick = function () {
  const productId = prompt("Inserisci l'ID del prodotto da eliminare:");
  if (productId) {
    fetch(`${URL}${productId}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0ODdiMzFjMjUwNDAwMTUxYWI2N2IiLCJpYXQiOjE3NDYxNzU5MjMsImV4cCI6MTc0NzM4NTUyM30.EWKIVxz1oR6-xD_SWztuF7cjLTMyO9VjvI8x4HyAzrc"
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Product with ID ${productId} deleted successfully.`);
          alert("Prodotto eliminato con successo!");
          throw new Error(`Failed to delete product with ID ${productId}. HTTP status: ${response.status}`);
        }
      })
      .catch((error) => console.error("Error:", error));
  } else {
    alert("ID prodotto non fornito.");
  }
};
