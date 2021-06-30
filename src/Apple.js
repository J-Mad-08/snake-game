/*
- [ ] The apple should appear randomly on the screen
- [ ] The apple should appear within the size of the board
- [ ] Remove the apple when the head of the snake reaches the apple
- [ ] Another apple should appear on the screen
- [ ] The apple should not appear on the snake
*/

class Apple {
  constructor(el) {
    this.node = document.createElement("img")
    this.node.setAttribute("id", "apple")
    this.node.setAttribute("src", "src/assets/apple.jpg")

    el.appendChild(this.node)

    this.node.style.left = 300
    this.node.style.top = 300
  }
}

Math.floor((Math.random() * 700) / 50) * 50 //?
Math.floor((Math.random() * 700) / 50) * 50 //?
Math.floor((Math.random() * 700) / 50) * 50 //?
Math.floor((Math.random() * 700) / 50) * 50 //?
