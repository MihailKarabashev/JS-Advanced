let compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};

let arr = [1, 2, 10, 12, 4, 6, 21, 33];

arr.sort(compareNumbers.descending);

console.log(arr);

//Echo function

let myFunc = (text) => {
  console.log(text.length);
  console.log(text);
}

myFunc('Hello, Javascript!');