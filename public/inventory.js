/* 
Equation for price when bulk buying of same item:
----------------------------
Define a discounted price per Kg depending on total amount, and multiply by total amount:

Exponential Decay Model:
Price per Kg = P1 x (1/weight)^k
PricePerKg * Weight = Total Price

    P1 = Base Price for 1kg
    Weight = Total weight of purchase
    k = Discount Factor, 
        Higher Value = Faster Price Decrease, Steeper Curve
        Lower Value = Slower Price Decrease, Flatter Curve
    PricePerKg => Maxes out at 25% disc. per Kg

ex. Pricing
10kg: 
PricePerKg = 250 * (1/10)^0.065  => 215 * 10 = 2150
PricePerKg = 250 * (1/50)^0.065  => 193 * 50 = 9650
PricePerKg = 250 * (1/100)^0.065 => 187.50 * 100 = 18750 (Maxed out disc.)
-----------------------------------------------------------------------------*/

/***  Equation Implementation Function ***/

// Function to calculate PricePerKg
function calculatePricePerKg(p1, weight) {
  return p1 * Math.pow(1 / weight, 0.065);
}

// Function to calculate total price based on weight
function calculateTotalPrice(p1, weight) {
  const pricePerKg = calculatePricePerKg(p1, weight);
  const totalPrice = pricePerKg * weight;

  // Check if the discount maxes out at 25%
  const maxDiscount = p1 * 0.75;
  const maxTotalPrice = maxDiscount * weight;
  return Math.round(totalPrice) < maxTotalPrice
    ? maxTotalPrice
    : Math.round(totalPrice);
}

/* Const. for Easy Access to Price Change */

const potatoBP = 400;
const carrotBP = 700;
const onionBP = 75;
const broccoliBP = 500;
const spinachBP = 2000;
const stringBeansBP = 700;

/*** Inventory List ***/

const inventory = [
  {
    id: 1,
    name: "Potato",
    image: "./images/veggies/potato.png",
    prices: [
      { weight: 1, price: potatoBP },
      { weight: 10, price: calculateTotalPrice(potatoBP, 10) },
      { weight: 50, price: calculateTotalPrice(potatoBP, 50) },
      { weight: 100, price: calculateTotalPrice(potatoBP, 100) },
    ],
  },
  {
    id: 2,
    name: "Carrot",
    image: "./images/veggies/carrot.png",
    prices: [
      { weight: 1, price: carrotBP },
      { weight: 10, price: calculateTotalPrice(carrotBP, 10) },
      { weight: 50, price: calculateTotalPrice(carrotBP, 50) },
      { weight: 100, price: calculateTotalPrice(carrotBP, 100) },
    ],
  },
  {
    id: 3,
    name: "Onion",
    image: "./images/veggies/onion.png",
    prices: [
      { weight: 1, price: onionBP },
      { weight: 10, price: calculateTotalPrice(onionBP, 10) },
      { weight: 50, price: calculateTotalPrice(onionBP, 50) },
      { weight: 100, price: calculateTotalPrice(onionBP, 100) },
    ],
  },
  {
    id: 4,
    name: "Broccoli",
    image: "./images/veggies/broccoli.png",
    prices: [
      { weight: 1, price: broccoliBP },
      { weight: 10, price: calculateTotalPrice(broccoliBP, 10) },
      { weight: 50, price: calculateTotalPrice(broccoliBP, 50) },
      { weight: 100, price: calculateTotalPrice(broccoliBP, 100) },
    ],
  },
  {
    id: 5,
    name: "Spinach",
    image: "./images/veggies/spinach.png",
    prices: [
      { weight: 1, price: spinachBP },
      { weight: 10, price: calculateTotalPrice(spinachBP, 10) },
      { weight: 50, price: calculateTotalPrice(spinachBP, 50) },
      { weight: 100, price: calculateTotalPrice(spinachBP, 100) },
    ],
  },
  {
    id: 6,
    name: "String Beans",
    image: "./images/veggies/string-beans01.png",
    prices: [
      { weight: 1, price: stringBeansBP },
      { weight: 10, price: calculateTotalPrice(stringBeansBP, 10) },
      { weight: 50, price: calculateTotalPrice(stringBeansBP, 50) },
      { weight: 100, price: calculateTotalPrice(stringBeansBP, 100) },
    ],
  },
];

export default inventory;
