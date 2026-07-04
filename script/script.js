// Initialize cart in sessionStorage if not present
if (!sessionStorage.getItem('cart')) {
  sessionStorage.setItem('cart', JSON.stringify([]));
}

// --------------------
// Gallery Page Features
// --------------------

// Add to Cart functionality
document.querySelectorAll('.addToCart').forEach(button => {
  button.addEventListener('click', (e) => {
    let item = e.target.parentElement.previousElementSibling.textContent;
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    cart.push(item);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added: " + item);
  });
});

// View Cart functionality
document.getElementById('viewCart')?.addEventListener('click', () => {
  let cart = JSON.parse(sessionStorage.getItem('cart'));
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Cart contains:\n" + cart.join("\n"));
  }
});

// Clear Cart functionality
document.getElementById('clearCart')?.addEventListener('click', () => {
  sessionStorage.setItem('cart', JSON.stringify([]));
  alert("Cart cleared.");
});

// Process Order functionality
document.getElementById('processOrder')?.addEventListener('click', () => {
  sessionStorage.setItem('cart', JSON.stringify([]));
  alert("Thank you for your order!");
});

// --------------------
// Subscribe Feature (Footer)
// --------------------
document.getElementById('subscribeBtn')?.addEventListener('click', () => {
  alert("Thank you for subscribing.");
});


// --------------------
// About Us Page Form
// --------------------
document.getElementById('feedbackForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('contactEmail').value;
  let message = document.getElementById('message').value;

  let orderData = { name, email, message };
  localStorage.setItem('customOrder', JSON.stringify(orderData));

  alert("Your feedback/custom order has been saved!");
});
