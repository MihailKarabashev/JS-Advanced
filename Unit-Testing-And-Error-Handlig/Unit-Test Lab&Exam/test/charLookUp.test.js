let lookupChar = require("../charLookUp");
let { assert, expect } = require("chai");

describe("Test lookUp fucntion functionallity", () => {
  it("Should return undifiend when first parameter is not string", () => {
    let resultNum = lookupChar(4, 2);
    let resultArr = lookupChar([], 2);
    let resultObj = lookupChar({}, 2);

    assert.equal(resultNum, undefined);
    assert.equal(resultArr, undefined);
    assert.equal(resultObj, undefined);
  });

  it("Should return undifiend when secound parameter is not integer", () => {
    let resultStr = lookupChar("Opps", "4");
    let resultArr = lookupChar("Opps", []);
    let resultObj = lookupChar("Opps", {});

    assert.equal(resultStr, undefined);
    assert.equal(resultArr, undefined);
    assert.equal(resultObj, undefined);
  });

  it("Should return incorect message when index passed is bigger than or equal string lenght", () => {
    let result = lookupChar("Milan", 5);
    let result2 = lookupChar("Milan", 6);
    assert.equal(result2, "Incorrect index");
    assert.equal(result, "Incorrect index");
  });

  it("Should return incorect message when index is less than zero", () => {
    let result = lookupChar("Milan", -1);

    assert.equal(result, "Incorrect index");
  });

  it("Should return specific char at index corectly", () => {
    let result = lookupChar("Milan", 0);
    let result1 = lookupChar("Milan", 1);

    assert.equal(result, "M");
    assert.equal(result1, "i");
  });
});
