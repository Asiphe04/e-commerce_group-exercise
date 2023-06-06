
// Function to increment the quantity
function incrementQuantity(element) {
  // Get the quantity element
  var quantityElement = element.parentNode.querySelector('.item-quantity');
  // Get the current quantity value
  var quantity = parseInt(quantityElement.innerText);
  // Increment the quantity by 1
  quantity++;
  // Update the quantity element with the new value
  quantityElement.innerText = quantity;
}

// Function to decrement the quantity
function decrementQuantity(element) {
  // Get the quantity element
  var quantityElement = element.parentNode.querySelector('.item-quantity');
  // Get the current quantity value
  var quantity = parseInt(quantityElement.innerText);
  // Check if the quantity is greater than 1
  if (quantity > 1) {
    // Decrement the quantity by 1
    quantity--;
    // Update the quantity element with the new value
    quantityElement.innerText = quantity;
  }
}
