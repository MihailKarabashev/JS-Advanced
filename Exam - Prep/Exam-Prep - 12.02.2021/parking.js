class Parking {
  constructor(capacity) {
    this._capacity = capacity;
    this._arr = [];
  }

  addCar(carModel, carNumber) {
    if (this._arr >= this._capacity) {
      throw new Error("Not enough parking space.");
    }

    this._arr.push({ carModel, carNumber, payed: false });
    this._capacity--;

    return `The ${carModel}, with a registration number ${carNumber}, parked.`;
  }

  removeCar(carNumber) {
    let car = this._arr.find((x) => x.carNumber === carNumber);
    if (car === undefined) {
      throw new Error("The car, you're looking for, is not found.");
    }

    if (car.payed === false) {
      throw new Error(
        `${carNumber} needs to pay before leaving the parking lot.`
      );
    }

    this._arr = this._arr.find((x) => x.carNumber !== car.carNumber);
    this._capacity++;

    return `${carNumber} left the parking lot.`;
  }

  pay(carNumber) {
    let car = this._arr.find((x) => x.carNumber === carNumber);
    if (!car) {
      throw new Error(`${carNumber} is not in the parking lot.`);
    }

    if (car.payed) {
      throw new Error(`${carNumber}'s driver has already payed his ticket.`);
    }

    car.payed = true;
    return `${carNumber}'s driver successfully payed for his stay.`;
  }

  getStatistics(carNumber) {
    if (carNumber) {
      let car = this._arr.find((x) => x.carNumber === carNumber);
      return `${car.carModel} == ${car.carNumber} - ${this._isPayed(car)}`;
    }

    let information = `The Parking Lot has ${this._capacity} empty spots left.\n`;

    this._arr
      .sort((a, b) => a.carModel.localeCompare(b.carModel))
      .forEach((x) => {
        information += `${x.carModel} == ${x.carNumber} - ${this._isPayed(
          x
        )}\n`;
      });

    return information;
  }

  _isPayed(car) {
    return car.payed === true ? `Has payed` : `Not payed`;
  }
}
