var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var newItem = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
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
