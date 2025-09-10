import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
  renderCart(cartItems); // ✅ Add this line to update the cart display
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

// ✅ Add this function to render the cart items on the page
function renderCart(cartItems) {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = ""; // Clear previous items

  cartItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = item.Name || item.name || "Unnamed item"; // Adjust based on your product structure
    cartContainer.appendChild(itemElement);
  });
}
