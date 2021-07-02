/*
- [ ] The apple should appear randomly on the screen
- [ ] The apple should appear within the size of the board
- [ ] Remove the apple when the head of the snake reaches the apple
- [ ] Another apple should appear on the screen
- [ ] The apple should not appear on the snake
*/

class Apple {
  constructor(el) {
<<<<<<< HEAD
    this.node = document.createElement("img");
    this.node.setAttribute("id", "apple");
    this.node.setAttribute("src", "src/assets/apple.jpg");
=======
    this.node = document.createElement("img")
    this.node.setAttribute("id", "apple")
    this.node.setAttribute("src", "src/assets/apple.jpg")
>>>>>>> 70342794bb5dff88888e226b66edf817d00462f5

    el.appendChild(this.node)

<<<<<<< HEAD
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
=======
    this.node.style.left = 300
    this.node.style.top = 300
>>>>>>> 70342794bb5dff88888e226b66edf817d00462f5
  }
}

Math.floor((Math.random() * 700) / 50) * 50 //?
Math.floor((Math.random() * 700) / 50) * 50 //?
Math.floor((Math.random() * 700) / 50) * 50 //?
Math.floor((Math.random() * 700) / 50) * 50 //?
