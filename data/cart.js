export const cart = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: "2",
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: "1",
  },
];

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
