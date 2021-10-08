function solution() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonWeight) {
      super(color, gasWeight);
      this._riboon = { color: ribbonColor, length: ribbonWeight };
    }

    get ribbon() {
      return this._riboon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonWeight, text) {
      super(color, gasWeight, ribbonColor, ribbonWeight);
      this._text = text;
    }

    get text() {
      return this._text;
    }

    get ribbon() {
      return super.ribbon;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = solution();
let testBalloon = new classes.Balloon("Tumno-bqlo", 20.5);
let testPartyBalloon = new classes.PartyBalloon(
  "Tumno-bqlo",
  20.5,
  "Svetlo-cherno",
  10.25
);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
