class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return this._rgbToHex(this.value);
  }

  plus(obj) {
    let number = this.value + obj.value;
    return new Hex(number);
  }

  minus(obj) {
    let number = this.value - obj.value;
    return new Hex(number);
  }

  static parse(str) {
    let result = parseInt(str, 16);
    return result;
  }

  _rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    hex = "0x" + hex.toUpperCase();
    return hex;
  }
}
