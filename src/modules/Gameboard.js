import { Ship } from "../modules/Ship";

class Gameboard {
  ships = {
    aircraftCarrier: new Ship(5),
    battleship_1: new Ship(4),
    battleship_2: new Ship(4),
    cruiser_1: new Ship(3),
    cruiser_2: new Ship(3),
    cruiser_3: new Ship(3),
    destroyer_1: new Ship(2),
    destroyer_2: new Ship(2),
    destroyer_3: new Ship(2),
    destroyer_4: new Ship(2),
  };

  board = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];

  missedAttack = [];

  placeShip(ship, xStart, yStart, xEnd, yEnd) {
    if (xStart === xEnd) {
      for (let y = yStart; y <= yEnd; y++) {
        this.board[y][xStart] = ship;
      }
    }

    if (yStart === yEnd) {
      for (let x = xStart; x <= xEnd; x++) {
        this.board[yStart][x] = ship;
      }
    }
  }

  allSunk() {
    let allShipsSunk = [];
    Object.keys(this.ships).forEach((ship) => {
      let bol = this.ships[ship].isSunk();
      if (bol) {
        allShipsSunk.push(true);
      } else {
        allShipsSunk.push(false);
      }
    });

    if (allShipsSunk.includes(false)) {
      return false;
    } else {
      return true;
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === null) {
      this.#updateMissedAttack(x, y);
      return false;
    }

    let ship = this.board[x][y];
    ship.hit();
    this.board[x][y] = true;
    return true;
  }

  collisionChecker() {
    
  }

  #updateMissedAttack(x, y) {
    this.missedAttack.push([x, y]);
    this.board[x][y] = false;
  }
}

export { Gameboard };
