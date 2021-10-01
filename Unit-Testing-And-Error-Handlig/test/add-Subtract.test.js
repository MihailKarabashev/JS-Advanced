let { assert, expect } = require("chai");
let createCalculator = require("../add-Subtract");

describe("Tests for add/subtract funtion", () => {
  it("Object should return true if contains all properties", () => {
    let obj = createCalculator();
    expect(obj).to.have.ownProperty("add");
    expect(obj).to.have.ownProperty("subtract");
    expect(obj).to.have.ownProperty("get");
  });
  it("Internal sum should retrun undifiend when try to  modified", () => {
    let obj = createCalculator();
    assert.equal(obj.value, undefined);
  });
  it("Add method should add number to intial value correctly", () => {
    let obj = createCalculator();
    obj.add(2);
    let actual = obj.get();

    assert.equal(actual, 2);
  });
  it("Subtract method should subtract number from  intial value correctly", () => {
    let obj = createCalculator();
    obj.add(2);
    obj.subtract(1);
    let actual = obj.get();

    assert.equal(actual, 1);
  });
  it("Get method should return internal sum correctly", () => {
    let obj = createCalculator();
    obj.add(1);

    assert.equal(obj.get(), 1);
  });
  it("Add or Subtract method should retrun NaN when passing number is not a number", () => {
    let obj = createCalculator();

    obj.add("someString");
    assert.isNaN(obj.get());

    obj.subtract([]);
    assert.isNaN(obj.get());
  });
});
