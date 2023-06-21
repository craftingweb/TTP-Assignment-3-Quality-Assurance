const shoppingCart = require("./shoppingCart");
// destructuring
let { addToCart, removeFromCart, calculateTotal } = shoppingCart;

describe("Testing shopping cart functionality", () => {
  test("checking if shopping cart exist", () => {
    expect(shoppingCart).toEqual(shoppingCart);
  });
  test("checking if attribute exists", () => {
    expect(shoppingCart).toHaveProperty("product");
  });
  test("checking if method of adding to cart exist", () => {
    expect(shoppingCart).toHaveProperty("addToCart");
  });
  test("checking if method of removing from cart exist", () => {
    expect(shoppingCart).toHaveProperty("removeFromCart");
  });
  test("checking if method of calculating sum exist", () => {
    expect(shoppingCart).toHaveProperty("calculateTotal");
  });
  test("addToCart adds item and quantity to the cart", () => {
    shoppingCart.addToCart("Apple", 2);
    expect(shoppingCart.product).toEqual([{ item: "Apple", quantity: 2 }]);
  });
  test("removeFromCart removes item and quantity from the cart", () => {
    shoppingCart.product = [
      { item: "Apple", quantity: 2 },
      { item: "Orange", quantity: 3 },
    ];
    shoppingCart.removeFromCart();
    expect(shoppingCart.product).toEqual([{ item: "Apple", quantity: 2 }]);
  });
});
