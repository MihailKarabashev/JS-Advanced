function solution() {
  let str = "";
  return {
    append(x) {
      str = str.concat(x);
    },
    removeStart(n) {
      str = str.substr(n);
    },
    removeEnd(n) {
      str = str.slice(0, str.length - n);
    },
    print() {
      console.log(str);
    },
  };
}
let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
