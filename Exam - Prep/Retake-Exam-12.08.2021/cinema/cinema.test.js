let cinema = require("./cinema");
let { assert, expect } = require("chai");

describe("Test cinema object", () => {
  describe("Test showMovies function", () => {
    it("ShowMovies function shoud accept array as parameter properly", () => {
      let array = ["King Kong", "Kong King", "KiKo Kong"];
      let expected = array.join(", ");

      let actual = cinema.showMovies(array);

      assert.equal(actual, expected);
      assert.isTrue(Array.isArray(array));
    });
    it("ShowMovies function shoud throw error when no array is passes as parameter", () => {
      let parameter = 1;

      expect(() => cinema.showMovies(parameter)).to.throw(
        TypeError,
        "movieArr.join is not a function"
      );
    });
    it("Should return correct value when array lenght passed is zero", () => {
      let arr = [];
      let expected = "There are currently no movies to show.";
      let actual = cinema.showMovies(arr);

      assert.equal(actual, expected);
    });
  });
  describe("Test ticketPrice function", () => {
    it("Should return correct price when schedule exsists", () => {
      const schedule = {
        Premiere: 12.0,
        Normal: 7.5,
        Discount: 5.5,
      };

      let actual1 = cinema.ticketPrice("Premiere");
      let actual2 = cinema.ticketPrice("Normal");
      let actual3 = cinema.ticketPrice("Discount");

      assert.equal(actual1, 12.0);
      assert.equal(actual2, 7.5);
      assert.equal(actual3, 5.5);
    });
    it("Should throw exception when projection type is invalid", () => {
      expect(() => cinema.ticketPrice("WrongInput")).to.throw(
        Error,
        "Invalid projection type."
      );
    });
  });
  describe("Test swapSeatsInHall function", () => {
    it("Should return Unsuccessful message  when input is not integer", () => {
      assert.equal(
        cinema.swapSeatsInHall("number", 1),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(1, "number"),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Should return Unsuccessful message when one of two numbers do not exist", () => {
      assert.equal(
        cinema.swapSeatsInHall(1),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Should return Unsucessful message when one of two numbers is greater than the capacity of the hall", () => {
      assert.equal(
        cinema.swapSeatsInHall(21, 1),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(1, 22),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Should return Unsucessful message when both numbers are equal", () => {
      let firstNumber = 12;
      let secoundNUmber = 12;
      let message = "Unsuccessful change of seats in the hall.";
      assert.equal(cinema.swapSeatsInHall(firstNumber, secoundNUmber), message);
    });
    it('Should return "Unsuccessful message when seats are less or equal to zero', () => {
      let message = "Unsuccessful change of seats in the hall.";
      assert.equal(cinema.swapSeatsInHall(0, 12), message);
      assert.equal(cinema.swapSeatsInHall(-1, 12), message);
      assert.equal(cinema.swapSeatsInHall(12, 0), message);
      assert.equal(cinema.swapSeatsInHall(12, -1), message);
    });
    it("Should return Succesful message when every other test is passed correctly", () => {
      assert.equal(
        cinema.swapSeatsInHall(12, 15),
        "Successful change of seats in the hall."
      );
      assert.notEqual(
        cinema.swapSeatsInHall(300, 300),
        "Successful change of seats in the hall."
      );
    });
  });
});
