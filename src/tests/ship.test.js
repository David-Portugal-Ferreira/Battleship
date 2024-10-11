import { Ship } from "../modules/Ship";

describe("Ship", () => {
  const ship = new Ship(5);

  test("Ship length", () => {
    expect(ship.length).toBe(5);
  });
  
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();

  test("Ship is sunk", () => {
    expect(ship.isSunk()).toBe(true);
  });

  test("Ship hit", () => {
    expect(ship.hit()).toBeUndefined();
  });
});