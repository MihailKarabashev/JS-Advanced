const sum = require("../sumOfNumbers");
const { assert, expect } = require("chai");

describe("Tests for sumOfNumbers lab", () => {
  it("Take an array of numbers as argument should works correctly", () => {
    let arr = [1, 2, 3];
    let expected = arr.reduce((acc, el) => acc + el, 0);

    let actual = sum(arr);

    assert.equal(actual, expected);
  });
});
