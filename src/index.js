import { Player } from "./modules/Player";
import "./index.css";
import { boardAction, viewGameboard } from "./modules/dom-manipulation";

const player1 = new Player("real");
Object.keys(player1.gameboard.ships).forEach((ship, index) => {
  player1.gameboard.placeShip(
    player1.gameboard.ships[ship],
    index,
    0,
    index,
    0 + (player1.gameboard.ships[ship].length - 1),
  );
});

const player2 = new Player("comp");
Object.keys(player2.gameboard.ships).forEach((ship, index) => {
  player2.gameboard.placeShip(
    player2.gameboard.ships[ship],
    index,
    0,
    index,
    0 + (player2.gameboard.ships[ship].length - 1),
  );
});

viewGameboard(player1);

boardAction(player1, player2, () => {
  console.log(whoPlays);
  whoPlays = player2;
  console.log(whoPlays);
});

boardAction(player2, player1, () => {
  whoPlays = player1;
  console.log(whoPlays);
});
