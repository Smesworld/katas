const multiplicationTable = function(maxValue) {
  let table = "";
  for (let i = 1; i <= maxValue; i++) {
    const row = [];
    for (let j = 1; j <= maxValue; j++) {
      row.push(i*j);
    }
    table += row.join(" ") + "\n";
  }

  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));