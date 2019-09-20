const charToUpper = function(string, loc = 0) {
  if(loc === 0) {
    return string.charAt(loc).toUpperCase() + string.slice(loc + 1);
  } else if (loc === string.length - 1) {
    return string.slice(0, loc - 1) + string.charAt(loc).toUpperCase();
  } else {
    return string.slice(0, loc - 1) + string.charAt(loc).toUpperCase() + string.slice(loc + 1);
  }
}

const replaceThings = function(string, thing, replace) {
  return string.replace(thing, replace);
}

const splitOnSpace = function(string) {
  return string.split(" ");
}

const joinString = function(array, joiner) {
  return array.join(joiner);
}

const doAThing = function(array, func, start = 0) {
  for (let i = start; i < array.length; i++) {
    // console.log("array is: ", func);
    array[i] = func(array[i]);
    // console.log(array[i]);
  }
}

const camel = function(input) {
  let response = splitOnSpace(input);
  doAThing(response, charToUpper, 1);
  return joinString(response, "");
};

const pascal = function(input) {
  let response = splitOnSpace(input);
  doAThing(response, charToUpper);
  return joinString(response, "");
};

const snake = function(input) {
  let response = splitOnSpace(input);
  return joinString(response, "_");
};

const kebab = function(input) {
  let response = splitOnSpace(input);
  return joinString(response, "-");

};

const title = function(input) {
  let response = splitOnSpace(input);
  doAThing(response, charToUpper);

  return joinString(response, " ");
};

const vowel = function(input) {
  const v = ["a", "e", "i", "o", "u"];
  let response = splitOnSpace(input);

  for (let i = 0; i < v.length; i++) {
    for (let each in response ) {
      response[each] = replaceThings(response[each], v[i], v[i].toUpperCase());
    }
  }

  return joinString(response, " ");
};

const consonant = function(input) {
  const v = ["a", "e", "i", "o", "u"];
  let response = splitOnSpace(input);

  for (let i = 0; i < v.length; i++) {
    for (let each in response ) {
      response[each] = replaceThings(response[each], v[i], v[i].toUpperCase());
    }
  }

  for (let j = 0; j < response.length; j++) {
    for (let k = 0; k < response[j].length; k++) {
      if( response[j][k] == response[j][k].toUpperCase()) {
        response[j] = response[j].replace(response[j][k], response[j][k].toLowerCase());
      } else {
        response[j] = response[j].replace(response[j][k], response[j][k].toUpperCase());
      }
    }
  }

  return joinString(response, " ");
};

const makeCase = function(input, toCase) {
  switch (toCase) {
    case "camel":
      return camel(input);
    case "pascal":
       return pascal(input);
    case "snake":
      return snake(input);
    case "kebab":
      return kebab(input);
    case "title":
      return title(input);
    case "vowel":
      return vowel(input);
    case "consonant":
      return consonant(input);
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));