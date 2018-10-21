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
  var list = [];
    for ( var i = 0; i < list.length; i++) {
        list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    if (cart.length === 0) {
      return `Your shopping cart is empty.`;
    }
    if (cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
    else{
      let lastItem = list.pop();
      return `In your cart, you have ${array.join(", ")}, and ${lastItem}.`
    }
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
