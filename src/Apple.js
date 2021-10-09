import { Body } from "./Body.js";

export class Apple {
  constructor(el, headX, headY) {
    this.node = document.createElement("img");
    this.node.setAttribute("id", "apple");
    this.node.setAttribute("src", "src/assets/cute-apple.png");

    el.appendChild(this.node);

    if (headX === undefined) {
      this.applePos = Math.floor((Math.random() * 700) / 50) * 50;
    } else {
      while (headX.x === this.applePos && headY.y === this.applePos) {
        this.applePos = Math.floor((Math.random() * 700) / 50) * 50;
      }
    }

    this.node.style.left = `${this.applePos}px`;
    this.node.style.top = `${this.applePos}px`;
  }
}

Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
