let isEvenOrOdd = require("../evenOrOdd");
const { assert, expect } = require("chai");

describe("Test if passed number is even or odd", () => {
  it("Should return undefined when pass not string to the function", () => {
    let actualNum = isEvenOrOdd(4);
    let actualArr = isEvenOrOdd([]);
    let actualObj = isEvenOrOdd({});

    assert.equal(actualNum, undefined);
    assert.equal(actualArr, undefined);
    assert.equal(actualObj, undefined);
  });
  it("Should return odd when string lenght odd", () => {
    let actual = isEvenOrOdd("tes");
    assert.equal(actual, "odd");
  });
  it("Should return even when string lenght is even", () => {
    let actual = isEvenOrOdd("test");
    assert.equal(actual, "even");
  });
});
