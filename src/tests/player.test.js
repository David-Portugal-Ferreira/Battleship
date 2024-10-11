import { Player } from "../modules/Player";
import { Gameboard } from "../modules/Gameboard";

describe("PLayer Tests", () => {

    let realPlayer = new Player("real");
    let compPlayer = new Player("computer");
    
    test("Real Player type", () => {
        expect(realPlayer.type).toBe("real")
    });

    test("Real Player gameboard", () => {
        expect(realPlayer.gameboard).toBeInstanceOf(Gameboard)
    })

    test("Computer Player type", () => {
        expect(compPlayer.type).toBe("computer")
    });
})