import { Apple } from "./Apple.js";

export class Head {
  constructor(el, position) {
    this.node = document.createElement("div");
    this.node.setAttribute("id", "head");

    el.appendChild(this.node);

    this.currentDirection = "right";
    this.SPEED = 200;

    this.node.style.top = 0;
    this.node.style.left = 0;

    setTimeout(this.move.bind(this, el, position), this.SPEED);
  }

  move(el, position) {
    const head = this.node;
    let direction = this.currentDirection;

    let y = Number(head.style.top.replace("px", ""));
    let x = Number(head.style.left.replace("px", ""));

    // Does our Apple position equal our Snake
    if (x === position && y === position) {
      const appleImg = document.getElementById("apple");
      el.removeChild(appleImg);
      // Create a new random position to place our Apple
      let randPos = Math.floor((Math.random() * 700) / 50) * 50;
      //if next apple is on snake, call random again
      while (x === randPos && y === randPos) {
        randPos = Math.floor((Math.random() * 700) / 50) * 50;
      }
      new Apple(el, randPos);
      // Let our Head know of the new Apple position
      position = randPos;
    }

    // Bonus: Head shouldn't be able to go backwards
    switch (true) {
      case direction === "up":
        head.style.top = `${(y -= 50)}px`;
        break;
      case direction === "right":
        head.style.left = `${(x += 50)}px`;
        break;
      case direction === "down":
        head.style.top = `${(y += 50)}px`;
        break;
      case direction === "left":
        head.style.left = `${(x -= 50)}px`;
        break;
      default:
        throw new Error("");
    }

    if (y < 0 || y >= 700 || x >= 700 || x < 0) {
      Number(head.style.top.replace("px", ""));
      Number(head.style.left.replace("px", ""));
      head.style.top = 0;
      head.style.left = 0;
      this.currentDirection = "right";
    }

    setTimeout(this.move.bind(this, el, position), this.SPEED);
  }
}
