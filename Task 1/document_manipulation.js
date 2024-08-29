const button = document.getElementById("listButton");
const display = document.getElementById("cardDisplay");

let products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "Powerful computing on the go",
  },
  {
    name: "Smartphone",
    price: 699.99,
    description: "Stay connected wherever you are",
  },
  {
    name: "Headphones",
    price: 149.99,
    description: "Immersive audio experience",
  },
];

const displayProducts = () => {
  display.innerHTML = '';
  products.forEach((product) => {
    display.innerHTML += `
    <div class="card m-2 p-2">
        <p><span class="fw-bold">Product:</span> ${product.name}</p>
        <p><span class="fw-bold">Price:</span> $${product.price}</p>
        <p><span class="fw-bold">Description:</span> ${product.description}</p>
    </div>
        `;
  });
};



