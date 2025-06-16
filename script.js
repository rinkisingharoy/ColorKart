let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(item + " added to cart!");
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = function () {
  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    stored.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartItems.appendChild(li);
    });
  }
};

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  if (u === "user" && p === "1234") {
    alert("User login successful!");
  } else {
    alert("Invalid user credentials");
  }
}

function adminLogin() {
  const u = document.getElementById("adminUser").value;
  const p = document.getElementById("adminPass").value;
  if (u === "admin" && p === "admin123") {
    alert("Admin login successful!");
  } else {
    alert("Invalid admin credentials");
  }
}
