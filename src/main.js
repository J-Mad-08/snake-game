import { Head } from "./Head.js"
import { Body } from "./Body.js"
import { Apple } from "./Apple.js"

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body")
  const board = document.querySelector("#board")

  const applePos = Math.floor((Math.random() * 700) / 50) * 50

  new Apple(board, applePos)
  const head = new Head(board, applePos)

  body.addEventListener("keydown", (e) => {
    switch (true) {
      case e.code === "ArrowLeft":
        head.currentDirection = "left"
        break
      case e.code === "ArrowRight":
        head.currentDirection = "right"
        break
      case e.code === "ArrowDown":
        head.currentDirection = "down"
        break
      case e.code === "ArrowUp":
        head.currentDirection = "up"
        break
      default:
        throw new Error("")
    }
  })
})
