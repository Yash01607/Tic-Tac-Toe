import Game from "./Game.js";
import GameView from "./Gameview.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = function (i) {
  console.log("Tile clicked: " + i);
  game.makeMove(i);
  gameView.update(game);
};

gameView.onRestartClick = function () {
  game = new Game();
  gameView.update(game);
};

gameView.update(game);
