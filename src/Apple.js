/*
- [x] The apple should appear randomly on the screen
- [x] The apple should appear within the size of the board
- [x] Remove the apple when the head of the snake reaches the apple
- [x] Another apple should appear on the screen
- [ ] The apple should not appear on the snake
*/
export class Apple {
  constructor(el, position) {
    console.log("Inside Apple ", position)
    this.node = document.createElement("img")
    this.node.setAttribute("id", "apple")
    this.node.setAttribute("src", "src/assets/apple.jpg")

    el.appendChild(this.node)

    this.node.style.left = `${position}px`
    this.node.style.top = `${position}px`

    //apple picking
    // const appleImg = document.getElementById("apple")
    //console.log(appleImg)
    //appleImg.style.margin
    //delete appleImg => grabbing img so that works
    // console.log(head, "head")
  }
}

Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
