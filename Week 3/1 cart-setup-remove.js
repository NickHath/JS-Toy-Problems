// Over a few toy problems we will be building out a class that keeps track of a
// shopping cart object that also includes a few methods to manipulate the data.

// To start you will want to make a class called Cart that includes a constructor
// function. Have the constructor function take in a single parameter that will
// be the items in the cart. Set that value equal to a value called this.cart

// Second we will want to create a method that will take in an id and then remove
// the item from the cart with the matching id, also make sure to account for if
// the id that is passed in that is not found.

class Cart {
  constructor(items) {
    this.cart = items;
  }

  removeItem(id) {
    this.cart = this.cart.filter(item => item.id !== id);
  }
}

let sampleCart = [
  {
    id: 1,
    product: 'Bob Ross Paint Kit',
    price: 45.99,
    quantity: 2,
  },
  {
    id: 2,
    product: 'Paint Palette',
    price: 7.99,
    quantity: 3,
  },
  {
    id: 3,
    product: 'Paint Thinner',
    price: 15.99,
    quantity: 2,
  },
];

let c = new Cart(sampleCart);
console.log(c.cart);
console.log('remove id 2');
c.removeItem(2);
console.log(c.cart);

