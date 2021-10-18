let numberOperations = require("./03. Number Operations_Resources");
let { assert, expect } = require("chai");

describe("Test numberOperation functionality", () => {
  describe("Test powNumber function", () => {
    it("Should return power of the given number", () => {
      assert.equal(4, numberOperations.powNumber(2));
    });
  });
  describe("Test numberChecker function", () => {
    it("NumberChecker function should throw error when not string is passed", () => {
      let message = "The input is not a number!";

      expect(() => numberOperations.numberChecker(undefined)).to.throw(
        Error,
        message
      );

      expect(() => numberOperations.numberChecker("Bro wtf")).to.throw(
        Error,
        message
      );
    });
    it("NumberChecker function should return lower message when input is lower than 100", () => {
      let message = "The number is lower than 100!";

      assert.equal(numberOperations.numberChecker(99), message);
      assert.notEqual(numberOperations.numberChecker(100), message);
    });
    it("NumberChecker function should return greater message when input is greater or equal to 100", () => {
      let message = "The number is greater or equal to 100!";

      assert.equal(numberOperations.numberChecker(100), message);
      assert.equal(numberOperations.numberChecker(101), message);
      assert.notEqual(numberOperations.numberChecker(99), message);
    });
  });
  describe("Test sumArrays function", () => {
    it("SumArrays function should return new array when two arrays are passed as parameters correctly", () => {
      let firstArr = [10, 20];
      let secoundArr = [10, 20];

      let expected = [20, 40];
      let actual = numberOperations.sumArrays(firstArr, secoundArr);

      assert.deepEqual(actual, expected);
    });
  });
});
