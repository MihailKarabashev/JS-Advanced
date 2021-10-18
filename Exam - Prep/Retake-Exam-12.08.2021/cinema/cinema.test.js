let cinema = require("./cinema");
let { assert, expect, AssertionError } = require("chai");

describe("Test cinema object", () => {
  it("ShowMovies function shoud accept array as parameter properly", () => {
    let array = ["King Kong", "Kong King", "KiKo Kong"];
    let expected = array.join(", ");

    let actual = cinema.showMovies(array);

    assert.equal(actual, expected);
    assert.isTrue(Array.isArray(array));
  });
  it("ShowMovies function shoud throw error when no array is passes as parameter", () => {
    let parameter = 1;
    let parameterAsStr = "param";
  });
});
