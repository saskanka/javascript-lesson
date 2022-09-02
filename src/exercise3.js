// JavaScript Array Exercise 2

const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "123", price: 11 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

// Exercises
/*
// 1) Get a list of the orders for the customer with the ID 234 that have not
// been delivered.
console.log(
  orders.filter((order) => order.customerId === "234" && !order.delivered)
);

// 1-EX:  SELF
const customerTwoThreeFour = (arr) =>
  arr.filter((order) => order.customerId === "234" && !order.delivered);

console.log(customerTwoThreeFour(orders));

// 2) Create a new property on each order with the total price of items ordered.
console.log(
  orders.map((order) => ({
    ...order,
    orderTotal: order.items.reduce((acc, item) => acc + item.price, 0),
  }))
);

// 2-EX:  Show product 123 price only.
const addOneTwoThreePrice = (arr) =>
  arr.map((order) => ({
    ...order,
    product123: order.items
      .filter((item) => item.productId === "123")
      .reduce((acc, item) => acc + item.price, 0),
  }));

console.log(addOneTwoThreePrice(orders));

// 3) Have all the orders been delivered?
console.log(orders.every((order) => order.delivered));

// 3-EX:  SELF
const allDelivered = (arr) => {
  let i = 0;
  let isDelivered = true;
  while (i < arr.length && isDelivered == true) {
    isDelivered = arr[i].delivered;
    i++;
  }
  return isDelivered;
};

console.log(allDelivered(orders));

// 4) Has the customer with ID '123' made any orders?
console.log(orders.some((order) => order.customerId === "123"));

// 4-EX:  Return order id of the customer 123.
const customerOneTwoThree = (arr) => {
  oneTwoThree = arr.filter((order) => order.customerId === "123");
  for (i = 0; i < oneTwoThree.length; i++) {
    return oneTwoThree[i].orderId;
  }
};

console.log(customerOneTwoThree(orders));

// 5) Have any products with an id of 123 been sold?
console.log(
  orders.reduce(
    (acc, order) =>
      acc +
      order.items.reduce((acc, item) => acc + (item.productId === "123"), 0),
    0
  )
);

// 5-EX:  List all products sold in unique values. ***WIP***
const itemsSold = (arr) =>
  arr.reduce((acc, order) => {
    // console.log(
    //   order.items.reduce(
    //     (acc, item) => ({
    //       ...acc,
    //       productId: {
    //         [item.productId]: acc[item.productId] + 1 || 1,
    //       },
    //     }),
    //     {}
    //   )
    // );
    return {
      ...acc,
      a:
        order.items.reduce(
          (acc, item) => ({
            ...acc,
            productId: {
              [item.productId]: acc[item.productId] + 1 || 1,
            },
          }),
          {}
        ) + 1 || 1,
    };
  }, 0);

console.log(itemsSold(orders));
*/
