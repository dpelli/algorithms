// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    addFront(value){
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront(){
        if (this.head == null){
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }
    front(){
        if (this.head == null){
            return null;
        }
        return this.head.value;
    }
}

myNode = new Node(7);
mySLL = new SLL();
mySLL.head = myNode;

console.log(mySLL)
console.log(myNode)