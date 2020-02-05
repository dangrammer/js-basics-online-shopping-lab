var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
  return cart
}

/////////////////////////////////////

function addToCart(item) {
  let itemObj = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  }
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  let phrase = 'In your cart, you have '
  let last = cart.length - 1

  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `${phrase}${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length > 1) {
    for (let i = 0; i < last; i++) {
      phrase += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return `${phrase}and ${cart[last].itemName} at $${cart[last].itemPrice}.`
}

function total() {
  let total = 0

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  let exItem = cart.find(i => i.itemName === item)

  if (exItem) {
    cart.splice(cart.indexOf(exItem), 1)
    return cart
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  let cost = total()

  if (cardNumber) {
    cart = []
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}
