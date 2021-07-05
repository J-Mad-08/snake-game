import { Apple } from "./Apple.js";
import { Head } from "./Head.js";

export class Game {
  constructor() {
    this.body = document.querySelector("body");
    this.board = document.createElement("div");
    this.board.setAttribute("id", "board");
    this.body.appendChild(this.board);

    let apple = new Apple(this.board);
    const head = new Head(this.board, apple.applePos);

    this.body.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          head.currentDirection = "left";
          break;
        case "ArrowRight":
          head.currentDirection = "right";
          break;
        case "ArrowDown":
          head.currentDirection = "down";
          break;
        case "ArrowUp":
          head.currentDirection = "up";
          break;
        default:
          throw new Error("");
      }
    });
  }
}

new Game();
