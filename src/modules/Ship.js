class Ship {
  numberOfHits = 0;
  sunk = false;

  constructor(length) {
    this.length = length;
  }

  hit() {
    this.numberOfHits++;
  }

  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
      return true;
    }
    return this.sunk;
  }
}

export { Ship };