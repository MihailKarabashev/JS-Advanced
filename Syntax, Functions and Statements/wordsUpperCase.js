function converStringToUpperCase(input){
  console.log( input.match(/\w+/g).join(",").toUpperCase());
}

converStringToUpperCase('Hi, how are you?');
converStringToUpperCase('hello');
