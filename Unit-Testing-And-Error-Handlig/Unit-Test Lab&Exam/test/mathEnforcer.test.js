let mathEnforcer = require("../mathEnforcer");
let { assert, expect } = require("chai");

describe("Test multiple scenarios for mathEnforcer", () => {
  it("Should return undefined when addFive is invoked with non integer parameters", () => {
    let actualStr = mathEnforcer.addFive("Ivan");
    let actualArr = mathEnforcer.addFive("Ivan");
    let actualObj = mathEnforcer.addFive("Ivan");
    let actualNull = mathEnforcer.addFive(null);
    assert.equal(actualStr, undefined);
    assert.equal(actualArr, undefined);
    assert.equal(actualObj, undefined);
    assert.equal(actualNull, undefined);
  });

  it("Should add five successfully to number when function add is invoked", () => {
    let actual = mathEnforcer.addFive(5);
    let negativeActual = mathEnforcer.addFive(-10);

    assert.equal(actual, 10);
    assert.equal(negativeActual, -5);
  });

  it("Should return undefined when subtractTen is invoked with non integer parameters", () => {
    let actualStr = mathEnforcer.subtractTen("Ivan");
    let actualArr = mathEnforcer.subtractTen("Ivan");
    let actualObj = mathEnforcer.subtractTen("Ivan");
    let actualNull = mathEnforcer.subtractTen(null);

    assert.equal(actualStr, undefined);
    assert.equal(actualArr, undefined);
    assert.equal(actualObj, undefined);
    assert.equal(actualNull, undefined);
  });

  it("Should subtract ten successfully to number when function subtractTen is invoked", () => {
    let number = mathEnforcer.addFive(15);
    let actual = mathEnforcer.subtractTen(number);

    assert.equal(actual, 10);
  });

  it("Should return undefined when sum is invoked with non integer parameters", () => {
    let firstNum = mathEnforcer.sum("Ivan", 10);
    let secoundNum = mathEnforcer.sum(10, "Ivan");

    assert.equal(firstNum, undefined);
    assert.equal(secoundNum, undefined);
  });

  it("Should sum two numbers correctly when function sum is invoked", () => {
    let actual = mathEnforcer.sum(10, 10);
    assert.equal(actual, 20);
  });

  it("Should return correct value for floating points numbers for sum function", () => {
    let actual = mathEnforcer.sum(4.2, 4.55);

    assert.closeTo(actual, 8.74, 0.01);
  });

  it("Should return correct value for floating points numbers for addFive function", () => {
    let actual = mathEnforcer.addFive(4.4);
    assert.closeTo(actual, 9.4, 0.01);
  });

  it("Should return correct value for floating points numbers for subtractTen function", () => {
    let number = mathEnforcer.addFive(5.5);
    let actual = mathEnforcer.subtractTen(number);
    assert.closeTo(actual, 0.5, 0.01);
  });
});
