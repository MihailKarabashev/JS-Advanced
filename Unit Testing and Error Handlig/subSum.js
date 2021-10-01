function solve(arr, startIndex, endIndex) {
  if (!Array.isArray(arr) || arr.some((x) => typeof x !== "number")) {
    return NaN;
  } else if (startIndex < 0) {
    startIndex = 0;
  }

  let myArr = arr.slice(startIndex, endIndex + 1);

  let num = myArr.reduce((acc, el) => acc + el, 0);
  return Math.round(num * 100) / 100;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
