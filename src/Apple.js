export class Apple {
  constructor(el, position) {
    this.node = document.createElement("img")
    this.node.setAttribute("id", "apple")
    this.node.setAttribute("src", "src/assets/cute-apple.png")

    el.appendChild(this.node)

    this.node.style.left = `${position}px`
    this.node.style.top = `${position}px`
  }
}
