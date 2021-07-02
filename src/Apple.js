/*
- [ ] The apple should appear randomly on the screen
- [ ] The apple should appear within the size of the board
- [ ] Remove the apple when the head of the snake reaches the apple
- [ ] Another apple should appear on the screen
- [ ] The apple should not appear on the snake
*/
export class Apple {
  constructor(el) {
    this.node = document.createElement("img")
    this.node.setAttribute("id", "apple")
    this.node.setAttribute("src", "src/assets/apple.jpg")

    el.appendChild(this.node)

    const randPos = Math.floor((Math.random() * 700) / 50) * 50

    this.node.style.left = `${randPos}px`
    this.node.style.top = `${randPos}px`
    console.log(randPos, "RS")

    //apple picking
    const appleImg = document.getElementById("apple")
    console.log(appleImg)
    //appleImg.style.margin
    //delete appleImg => grabbing img so that works
  }
}
