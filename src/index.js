import { Player } from "./modules/Player";
import "./index.css"

const player1 = new Player("real");
Object.keys(player1.gameboard.ships).forEach((ship, index) => {
  player1.gameboard.placeShip(
    player1.gameboard.ships[ship],
    index,
    0,
    index,
    0 + player1.gameboard.ships[ship].length,
  );
});
console.log(player1.gameboard.board);

const player2 = new Player("comp");
Object.keys(player2.gameboard.ships).forEach((ship, index) => {
  player2.gameboard.placeShip(
    player2.gameboard.ships[ship],
    index,
    0,
    index,
    0 + player2.gameboard.ships[ship].length,
  );
});
console.log(player2.gameboard.board);