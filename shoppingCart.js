// creating object shoppingCart that would be holding properties: variables and methods
const shoppingCart = {
  // array of objects that holds key:value pairs
  product: [],
  // adding item & quantity to cart
  addToCart: function (item, quantity) {
    return this.product.push({ item, quantity });
  },
  // removing item & quantity from an cart
  removeFromCart: function (item, quantity) {
    //when we poping no need to specify anything in ()
    return this.product.pop();
  },
  // calculate Total price
  calculateTotal: function (item, cost) {
    let newObject = {};
    newObject[item] = cost;
    this.product.push(newObject);
    return (this.product.cost = cost);
  },
};

module.exports = shoppingCart;

// if we refer this.addToCartItem ;; this will be refering to window object not our object and if we just run name of our function, it won't be refering to our object
