const camel = function(input) {
  let response = "";

  for (let i = 0; i < input.length; i++) {
    if( input[i] === " ") {
      response += input.charAt(i+1).toUpperCase();
      i++;
    } else {
      response += input[i];
    }
  }

  return response;
};

const pascal = function(input) {
  return input.charAt(0).toUpperCase() + camel(input.slice(1));

};

const snake = function(input) {
  let response = "";

  for (let i = 0; i < input.length; i++) {
    if( input[i] === " ") {
      response += "_";
    } else {
      response += input[i];
    }
  }

  return response;
};

const kebab = function(input) {
  let response = "";

  for (let i = 0; i < input.length; i++) {
    if( input[i] === " ") {
      response += "-";
    } else {
      response += input[i];
    }
  }

  return response;
};

const title = function(input) {

};

const vowel = function(input) {

};

const consonant = function(input) {

};

const makeCase = function(input, toCase) {
  // Put your solution here
  return kebab(input);
};

console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));