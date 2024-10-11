import { Gameboard } from "../modules/Gameboard";

describe("Gameboard Tests", () => {
  let gameboard = new Gameboard();

  test("Ships Object", () => {
    expect(gameboard.ships).toBeInstanceOf(Object);
  });

  test("Number of Ships", () => {
    expect(Object.keys(gameboard.ships).length).toBe(10);
  });

  test("Receive Attack", () => {
    gameboard.receiveAttack(5, 5);
    expect(gameboard.missedAttack[0]).toStrictEqual([5, 5])
  });

  test("Missed Attack", () => {
    expect(gameboard.missedAttack.length).toBe(1);
  });

  test("Sunk every ship", () => {
    expect(gameboard.allSunk()).toBe(false)
  })

  test("Place Ship", () => {

    gameboard.placeShip(gameboard.ships.aircraftCarrier, 5, 5, 10, 5)

    expect(gameboard.board[5][5]).toBeInstanceOf(Object)
  })
});
