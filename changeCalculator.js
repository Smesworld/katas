const remainder = function(dividend, divisor) {
  return dividend % divisor;
}

const division = function(dividend, divisor) {
  return Math.floor(dividend / divisor);
}

const calculateChange = function(total, cash) {
  const values = { twentyDollars: 2000, tenDollars: 1000, fiveDollars: 500, twoDollars: 200, oneDollar: 100, quarter: 25, dime: 10, nickel: 5, penny: 1};
  let change = cash - total;
  const response = {};

  for (value in values) {
    console.log(change);
    if(change) {
      cash = division(change, values[value])
      if(cash != 0)
      {
        response[value] = cash;
      }
      change = remainder(change, values[value]);
    }
  }

  return response;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));