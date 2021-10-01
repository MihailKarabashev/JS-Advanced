const rgbToHexColor = require("../rgbToHex");
const { assert, expect } = require("chai");

describe("Test rgbToHex function", () => {
  it("Should accept only integer numbers", () => {
    let actual = rgbToHexColor(255, 128, 13);

    assert.equal(actual, true);
  });
});
