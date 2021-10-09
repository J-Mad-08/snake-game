import { Head } from "./Head.js";

export class Body {
  //constructors
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //methods
  //growFunc
  //addToHead
  grow(el) {
    //!head
    if (!this.head) {
      this.head = new Node(el);
      this.tail = new Node(el);
      this.head.next = this.tail;
      this.tail.prev = this.head;
      //this.tail.next = null;
      this.length++;
    }
    //head
    //reassign
    else {
      const newNode = new Node(el);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      //console.log(this.tail.prev, "tail");
      this.length++;
    }
  }
}

class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
    this.prev = null;
  }
}

const testBody = () => {
  const newBody = new Body();
  newBody.grow(1);
  newBody.grow(2);
  newBody.grow(3);
  newBody.grow(4);
  newBody.grow(5);

  console.log(newBody);
};

//console.log(`head is currently: \n`, JSON.stringify(Body, null, "\t"));
