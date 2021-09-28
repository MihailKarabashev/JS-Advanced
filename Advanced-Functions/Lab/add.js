function solution(number) {
  return function mySecoundFunc(secNumber) {
    return number + secNumber;
  };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
