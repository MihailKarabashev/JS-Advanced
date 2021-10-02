const { assert, expect } = require("chai");
const isSymmetric = require("../checkForSymmetry");

describe("Test for Symmetry array", () => {
  it("Take an array as argument should return false", () => {
    let input = 1;

    let expected = false;
    let actual = isSymmetric(input);

    assert.equal(actual, expected);
  });

  it("Should return true when array is symemetric", () => {
    let arr = [1, 2, 3, 2, 1];
    let expected = true;
    let actual = isSymmetric(arr);

    assert.equal(actual, expected);
  });

  it("Should return false when array is not symemetric", () => {
    let arr = [1, 2, 3, 3, 2, 2];
    let expected = false;
    let actual = isSymmetric(arr);

    assert.equal(actual, expected);
  });

  it("Should fail when non array is provided", () => {
    let expected = false;
    assert.equal(isSymmetric(null), expected);
    assert.equal(isSymmetric(undefined), expected);
    assert.equal(isSymmetric("2"), expected);
  });
});
