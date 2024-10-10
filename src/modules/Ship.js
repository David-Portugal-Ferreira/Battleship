class Ship {
  numberOfHits = 0;
  sunk = false;

  constructor(length) {
    this.length = length;
  }

  hit() {
    return this.numberOfHits++;
  }

  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.length++;
      this.sunk = true;
    }
  }
}

export { Ship };
