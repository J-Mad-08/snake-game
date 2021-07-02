export class Apple {
  constructor(el, position) {
    console.log("Inside Apple ", position)
    this.node = document.createElement("img")
    this.node.setAttribute("id", "apple")
    this.node.setAttribute("src", "src/assets/apple.jpg")

    el.appendChild(this.node)

    this.node.style.left = `${position}px`
    this.node.style.top = `${position}px`
  }
}
