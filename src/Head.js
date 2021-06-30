class Head {
  constructor(el) {
    this.node = document.createElement("div")
    this.node.setAttribute("id", "head")
    el.appendChild(this.node)

    this.currentDirection = "right"
    this.SPEED = 200

    this.node.style.top = 0
    this.node.style.left = 0

    setTimeout(this.move.bind(this), this.SPEED)
  }

  move() {
    const head = this.node
    let direction = this.currentDirection

    let topPosition = Number(head.style.top.replace("px", ""))
    let leftPosition = Number(head.style.left.replace("px", ""))

    // Bonus: Head shouldn't be able to go backwards
    switch (true) {
      case direction === "up":
        head.style.top = `${(topPosition -= 50)}px`
        break
      case direction === "right":
        head.style.left = `${(leftPosition += 50)}px`
        break
      case direction === "down":
        head.style.top = `${(topPosition += 50)}px`
        break
      case direction === "left":
        head.style.left = `${(leftPosition -= 50)}px`
        break
      default:
        throw new Error("")
    }

    if (
      topPosition < 0 ||
      topPosition >= 700 ||
      leftPosition >= 700 ||
      leftPosition < 0
    ) {
      console.log("Triggered")
      Number(head.style.top.replace("px", ""))
      Number(head.style.left.replace("px", ""))
      head.style.top = 0
      head.style.left = 0
      this.currentDirection = "right"
    }

    setTimeout(this.move.bind(this), this.SPEED)
  }
}
