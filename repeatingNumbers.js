const repeatNumbers = function(data) {
  const repeat = data.map((element) => {
    response = "";
    for (let i = 0; i < element[1]; i++) {
      response += element[0];
    }
    return response;
  })

  return repeat.join(", ");
}

console.log(repeatNumbers([[1,2], [21, 5]]));