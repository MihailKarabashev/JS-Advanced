function createComputerHierarchy() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      [this.manufacturer, this.responseTime] = [manufacturer, responseTime];
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      [this.manufacturer, this.width, this.height] = [
        manufacturer,
        width,
        height,
      ];
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      [this.manufacturer, this.expectedLife] = [manufacturer, expectedLife];
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error();
      }

      [this.manufacturer, this.processorSpeed, this.ram, this.hardDiskSpace] = [
        manufacturer,
        processorSpeed,
        ram,
        hardDiskSpace,
      ];
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      [this.width, this.color] = [weight, color];
      this._battery = _validateInput(battery, Battery, this._battery);
    }

    get battery() {
      return this._battery;
    }

    set battery(value) {
      _validateInput(value, Battery, this._battery);
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this._keyboard = _validateInput(keyboard, Keyboard, this._keyboard);
      this._monitor = _validateInput(monitor, Monitor, this._monitor);
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(value) {
      _validateInput(value, Keyboard, this._keyboard);
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(value) {
      _validateInput(value, Monitor, this._monitor);
    }
  }

  function _validateInput(input, className, field) {
    let instance = input instanceof className;

    if (!instance) {
      throw new TypeError();
    }

    field = input;
    return field;
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery("Energy", 3);
console.log(battery);
let laptop = new Laptop(
  "Hewlett Packard",
  2.4,
  4,
  0.5,
  3.12,
  "Silver",
  battery
);
console.log(laptop);
