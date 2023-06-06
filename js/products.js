let products = [
  {
    id: 1,
    image: "https://i.postimg.cc/J0tVbr0j/Acer-Aspire-A5.png",
    name: "Acer_Aspire-A5",
    desc: "",
    price: 6000,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/nrKRjNYq/Lenovo-Idea-Pad-3.png",
    name: "Lenovo-Idea-Pad-3",
    desc: "",
    price: 20000,
    quantity: 1,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/BQLXxDj7/Logitech-C270-HD-Webcam.png",
    name: "Logitech-c270-HD-Webcam",
    desc: "",
    price: 15000,
    quantity: 1,
  },
  {
    id: 4,
    image: "https://i.postimg.cc/GtsdsFXk/Mavic-Drone-Different-Angle.jpg",
    name: "Mavic-Drone-Different-Angle",
    desc: "",
    price: 20000,
    quantity: 1,
  },
  {
    id: 5,
    image: "https://i.postimg.cc/P5qhWnVX/Volkano-Zoom-700-Webcam.jpg",
    name: "Volkano-Zoom_700_Webcam",
    desc: "",
    price: 30000,
    quantity: 5,
  },
  {
    id: 6,
    image:
      "https://i.postimg.cc/jjQcQ28m/Huawei-Band-7-Wilderness-Green-Silicone-Smartwatch.png",
    name: "Huawei-Band-7_Wildarie",
    desc: "",
    price: 4000,
    quantity: 6,
  },
  {
    id: 7,
    image:
      "https://i.postimg.cc/t47GcQ0B/Daniel-Klein-d-Smart-Blue-Plated-Silicone-Smartwatch.png",
    name: "Daniel-Klein-d-Smart-Blue",
    desc: "",
    price: 50000,
    quantity: 6,
  },
  {
    id: 8,
    image: "https://i.postimg.cc/gjBNX7M0/Hauwei-Watch-Fit-2.png",
    name: "Huawei-Watch-Fit-2",
    desc: "",
    price: 25000,
    quantity: 6,
  },
  {
    id: 9,
    image: "https://i.postimg.cc/nrKRjNYq/Lenovo-Idea-Pad-3.png",
    name: "Lenovo-Idea-Pad-3",
    desc: "",
    price: 11000,
    quantity: 6,
  },
];
let dispProduct = document.querySelector(".products");
products.forEach((data) => {
  dispProduct.innerHTML += `
      <div class="card productCard my-2 col-lg-4 col-md-4 col-12">
      <img src="${data.image}" class="card-img-1">
      <div class="card-body">
    <h4 class="overflow-y-hidden">${data.name}</h4>
      <h4 class="overflow-y-hidden">R${data.price}</h4>
      <h4 class="overflow-y-hidden">${data.quantity}</h4>
      <h4 class="">${data.desc}</h4>
      <button ><a href="/page/cart.html">add to cart</a></button>
      </div>
      </div>`;
});
const cart = [];
function addToCart(productId) {
  const cartContainer = document.getElementById("cart-container");
  const product = products.find((product) => product.id === productId);
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
  saveData();
}
function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";
  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
          <span>${product.name}</span>
          <span>${product.price}</span>
          `;
    cartContainer.appendChild(cartItem);
    saveData();
  });
}
const cartContainer = document.getElementById("cart-container");
function saveData() {
  localStorage.setItem("item", cartContainer.innerHTML);
}
function showData() {
  cartContainer.innerHTML = localStorage.getItem("item");
}
