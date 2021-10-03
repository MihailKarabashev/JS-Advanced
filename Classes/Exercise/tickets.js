function solve(input, dest) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let arr = input.reduce((acc, x) => {
    let [destination, priceAsStr, status] = x.split("|");
    let price = Number(priceAsStr);

    acc.push(new Ticket(destination, price, status));
    return acc;
  }, []);

  dest.toLowerCase() !== "price"
    ? arr.sort((a, b) => a[dest].localeCompare(b[dest]))
    : arr.sort((a, b) => a[dest] - b[dest]);
  return arr;
}
