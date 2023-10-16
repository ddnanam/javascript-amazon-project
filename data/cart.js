export const cart = [];

export function addtocart(productId) {
  let matchingitem;
  cart.forEach((CartItem) => {
    if (productId === CartItem.productId) {
      matchingitem = CartItem;
    }
  });

  if (matchingitem) {
    matchingitem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
