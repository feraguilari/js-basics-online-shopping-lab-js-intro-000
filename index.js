var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random() * 100
  price = Math.floor(price) + 1
  console.log(price)
  var item_object = {};
  item_object[item] = price
  cart.push(item_object)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
   return `Your total cost is $${total()}, which will be charged to the card ${creditCard}.`;
    cart = [];
  }
}
