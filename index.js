const products = document.querySelectorAll('.product');
const cartItems = document.querySelector('.cart-items');
const totalPrice = document.querySelector('.total-price');

let cartTotal = 0;

// Add click event listener to all "Add to Cart" buttons
products.forEach((product) => {
  const addToCartBtn = product.querySelector('.add-to-cart');
  const productPrice = parseFloat(product.querySelector('.price').textContent.slice(1));

  addToCartBtn.addEventListener('click', () => {
    cartTotal += productPrice;
    updateCartTotal();

    // Create new cart item
    const cartItem = document.createElement('li');
    cartItem.textContent = product.querySelector('h3').textContent;
    cartItems.appendChild(cartItem);
  });
});

// Update cart total price
function updateCartTotal() {
  totalPrice.textContent = `$${cartTotal.toFixed(2)}`;
}
