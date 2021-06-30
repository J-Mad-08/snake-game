document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body")
  const board = document.querySelector("#board")

  const head = new Head(board)
  new Apple(board)

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
})
