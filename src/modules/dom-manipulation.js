const myGameboard = document.querySelectorAll(".my-gameboard");
const enemyGameboard = document.querySelectorAll(".enemy-gameboard");

function viewGameboard(player) {
  for (let i = 0; i < player.gameboard.board.length; i++) {
    let elementArray = myGameboard[0].children[i].querySelectorAll("div");

    let j = 0;
    while (j < 10) {
      if (player.gameboard.board[i][j] !== null) {
        elementArray[j].style["background-color"] = "blue";
      }
      j++;
    }
  }
}

function boardAction(player, enemy) {
  if (player.type === "real") {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let elementArray =
          enemyGameboard[0].children[i].querySelectorAll("div");
        elementArray[j].addEventListener("click", () => {
          if (
            enemy.gameboard.board[i][j] !== null &&
            enemy.gameboard.board[i][j] !== true
          ) {
            enemy.gameboard.receiveAttack(i, j);
            updateGameboardView(player, "red", i, j);
          } else if (enemy.gameboard.board[i][j] === true) {
            return;
          } else {
            updateGameboardView(player, "grey", i, j);
          }
        });
      }
    }
  } else if (player.type === "comp") {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let elementArray = myGameboard[0].children[i].querySelectorAll("div");
        elementArray[j].addEventListener("click", () => {
          if (
            enemy.gameboard.board[i][j] !== null &&
            enemy.gameboard.board[i][j] !== true
          ) {
            enemy.gameboard.receiveAttack(i, j);
            updateGameboardView(player, "red", i, j);
          } else if (enemy.gameboard.board[i][j] === true) {
            return;
          } else {
            updateGameboardView(player, "grey", i, j);
          }
        });
      }
    }
  }
}

function updateGameboardView(player, color, i, j) {
  if (player.type === "real") {
    let pos = Array.from(enemyGameboard[0].children[i].querySelectorAll("div"));
    pos[j].style["background-color"] = color;
  } else if (player.type === "comp") {
    let pos = Array.from(myGameboard[0].children[i].querySelectorAll("div"));
    pos[j].style["background-color"] = color;
  }
}

export { viewGameboard, boardAction };
