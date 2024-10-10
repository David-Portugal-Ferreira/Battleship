import {Ship} from "../modules/Ship";

describe("Ship", () => {
    const ship = new Ship(5);

    test("Ship length", () => {
        expect(ship.sunk).toBe(false);
    })

    test("Ship is sunk", () => {
        expect(ship.isSunk()).toBe(false)
    })

    test("Ship hit", () => {
        expect(ship.hit()).toReturn()
    })
})