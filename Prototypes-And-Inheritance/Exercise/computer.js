function createComputerHierarchy() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error();
      }

      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
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
      this.weight = weight;
      this.color = color;
      this._validateBattery(battery);
    }

    get battery() {
      return this._battery;
    }

    set battery(value) {
      this._validateBattery(value);
    }

    _validateBattery(input) {
      let isInstanceOfBattery = input instanceof Battery;

      if (!isInstanceOfBattery) {
        throw new TypeError();
      }

      this._battery = input;
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
      this._validateInput(keyboard, Keyboard, this._keyboard);
      this._validateInput(monitor, Monitor, this._monitor);
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(value) {
      this._validateInput(value, Keyboard, this._keyboard);
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(value) {
      this._validateInput(value, Monitor, this._monitor);
    }

    _validateInput(input, className, field) {
      let instance = input instanceof className;

      if (!instance) {
        throw new TypeError();
      }

      field = input;
    }
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
let keyboard = new classes.Keyboard("SS", 30);
let monitor = new classes.Monitor("FF", 33, 44);
let computer = new classes.Desktop("dsad", 22, 22, 22, keyboard, monitor);
computer.monitor = "adsadas";
