import { Apple } from "./Apple.js"

export class Head {
  constructor(el, position) {
    this.node = document.createElement("img")
    this.node.setAttribute("id", "head")
    this.node.setAttribute("src", "src/assets/snake-right.png")

    el.appendChild(this.node)

    this.currentDirection = "right"
    this.SPEED = 200

    this.node.style.top = 0
    this.node.style.left = 0

    setTimeout(this.move.bind(this, el, position), this.SPEED)
  }

  move(el, position) {
    const head = this.node
    let direction = this.currentDirection

    let y = Number(head.style.top.replace("px", ""))
    let x = Number(head.style.left.replace("px", ""))

    // Does our Apple position equal our Snake
    if (x === position && y === position) {
      const appleImg = document.getElementById("apple")
      el.removeChild(appleImg)
      let apple = new Apple(el, this.x, this.y)
      // Let our Head know of the new Apple position
      position = apple.applePos
    }

    // Bonus: Head shouldn't be able to go backwards
    switch (direction) {
      case "up":
        head.style.top = `${(y -= 50)}px`
        head.setAttribute("src", "src/assets/snake-up.png")
        break
      case "right":
        head.style.left = `${(x += 50)}px`
        head.setAttribute("src", "src/assets/snake-right.png")
        break
      case "down":
        head.style.top = `${(y += 50)}px`
        head.setAttribute("src", "src/assets/snake-down.png")
        break
      case "left":
        head.style.left = `${(x -= 50)}px`
        head.setAttribute("src", "src/assets/snake-left.png")
        break
      default:
        throw new Error("")
    }

    if (y < 0 || y >= 700 || x >= 700 || x < 0) {
      Number(head.style.top.replace("px", ""))
      Number(head.style.left.replace("px", ""))
      head.style.top = 0
      head.style.left = 0
      this.currentDirection = "right"
    }

    setTimeout(this.move.bind(this, el, position), this.SPEED)
  }
}
