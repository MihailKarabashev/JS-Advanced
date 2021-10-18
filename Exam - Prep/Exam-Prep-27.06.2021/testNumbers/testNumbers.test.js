let testNumbers = require("./testNumbers");
let { assert, expect } = require("chai");

describe("Test all testNumber functions", () => {
  describe("Test sumNumber function", () => {
    it("SumNumber function should return undifined when one of parameters is not a number", () => {
      let actualFirst = testNumbers.sumNumbers("2", 1);
      let actualSecound = testNumbers.sumNumbers(1, "2");

      assert.equal(actualFirst, undefined);
      assert.equal(actualSecound, undefined);
    });
    it("SumNumber function should retrun sum of two numbers correctly", () => {
      let expected = (2.2 + 3.222).toFixed(2);
      let actual = testNumbers.sumNumbers(2.2, 3.222);
      assert.equal(actual, expected);
    });
  });
  describe("Test numberChecker function", () => {
    it("NumberChecker function should return odd message when input is odd", () => {
      let message = "The number is odd!";
      let actual = testNumbers.numberChecker(1);
      let wrongResult = testNumbers.numberChecker(2);

      assert.equal(actual, message);
      assert.notEqual(wrongResult, message);
    });
    it("NumberChecker function should return even message when input is even", () => {
      let message = "The number is even!";
      let actual = testNumbers.numberChecker(2);
      let wrongResult = testNumbers.numberChecker(1);

      assert.equal(actual, message);
      assert.notEqual(actual, wrongResult);
    });
    it("NumberChecker function should throw error when not string is passed", () => {
      let message = "The input is not a number!";

      expect(() => testNumbers.numberChecker(undefined)).to.throw(
        Error,
        message
      );

      expect(() => testNumbers.numberChecker("Bro wtf")).to.throw(
        Error,
        message
      );
    });
  });
  describe("Test averageSumArray function", () => {
    it("Should return average sum  of array when passed argument is array", () => {
      let arr = [10, 20, 30];
      let expected =
        arr.reduce((acc, val) => {
          return acc + val;
        }, 0) / arr.length;

      let actual = testNumbers.averageSumArray(arr);

      assert.equal(actual, expected);
    });
  });
});
