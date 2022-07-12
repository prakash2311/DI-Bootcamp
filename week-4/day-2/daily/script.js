let client = "john";

let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "35$",
  other: {
    payed: false,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = groceries.fruits.forEach((params) => {
  console.log(params);
});

const cloneGroceries = () => {
  let user = client;
  //   console.log(user);
  let shopping = groceries;
  console.log(shopping);
};
cloneGroceries();
