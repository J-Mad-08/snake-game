import { Head } from "./Head.js"
import { Body } from "./Body.js"
import { Apple } from "./Apple.js"

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body")
  const board = document.querySelector("#board")

  const randPos = Math.floor((Math.random() * 700) / 50) * 50

  const head = new Head(board, randPos)
  new Apple(board, randPos)

  body.addEventListener("keydown", (e) => {
    switch (true) {
      case e.code === "ArrowLeft":
        head.currentDirection = "left"
        console.log("left")
        break
      case e.code === "ArrowRight":
        head.currentDirection = "right"
        console.log("right")
        break
      case e.code === "ArrowDown":
        head.currentDirection = "down"
        console.log("down")
        break
      case e.code === "ArrowUp":
        head.currentDirection = "up"
        console.log("up")
        break
      default:
        throw new Error("")
    }
  })
  console.log(head, "this head")
  // console.log(head.style.left, "head.x")
})
