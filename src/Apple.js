/*
- [ ] The apple should appear randomly on the screen
- [ ] The apple should appear within the size of the board
- [ ] Remove the apple when the head of the snake reaches the apple
- [ ] Another apple should appear on the screen
- [ ] The apple should not appear on the snake
*/

class Apple {
  constructor(el) {
    this.node = document.createElement("img");
    this.node.setAttribute("id", "apple");
    this.node.setAttribute("src", "src/assets/apple.jpg");

    el.appendChild(this.node);

    const randPos = Math.floor((Math.random() * 700) / 50) * 50;
    //console.log(randPos, "rs") //is working

    this.node.style.left = randPos;
    this.node.style.top = randPos;
    console.log(randPos, "RS");

    //apple picking
    const appleImg = document.getElementById("apple");
    console.log(appleImg);
    //appleImg.style.margin
    //delete appleImg => grabbing img so that works
  }
}

Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
Math.floor((Math.random() * 700) / 50) * 50; //?
