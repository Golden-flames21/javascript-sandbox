// write afunction that takes in a string and converts the first letter of every word to uppercase.
// hello world ===> Hello World.
const firstLetterToCaps = (str) => {
  const result = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join(" ");
};
console.log(firstLetterToCaps("testing is fun and stressful"));

// write a function that checks if the parameter is a number or not. return true or false.

const CheckNumber = (arg) => typeof arg === "number";
console.log(CheckNumber("hello"));

const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];
// iterate over the currency data and log a message saying "The Exchange rate for USD to Nigerian Naira is 1700"
currencyData.map((currency) => {
  console.log(
    `The Exchange rate ${currency.from} to ${currency.to} is ${currency.rate}`
  );
});
// search for a certain currency pair inside of the currencyData
const findCurrencyPair = (baseCurrency, toCurrency) => {
  const pair = currencyData.find(
    (currency) => currency.from === baseCurrency && currency.to === toCurrency
  );
  if (pair) {
    console.log(`The Exchange rate ${pair.from} to ${pair.to} is ${pair.rate}`);
  } else {
    console.log("The currency pair cannot be found");
  }
};
// search through the currency data to find a match.
findCurrencyPair("CND", "NGN");

const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `${amount} ${pair.from} is equivalent to ${amount * pair.rate} ${pair.to}`
    );
  } else {
    console.log("currency pair not found");
  }
};
convertCurrency("USD", "NGN", 500);
const addNewCurrency = (baseCurrency, toCurrency, rate) => {
  const newCurrency = {
    from: baseCurrency,
    to: toCurrency,
    rate: rate,
  };
  currencyData.push(newCurrency);
  console.log(currencyData);
};
addNewCurrency("AUS", "NGN", 400); 
