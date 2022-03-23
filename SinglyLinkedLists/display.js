// Display
// Create display() that returns a string containing all list values. 
// Build what you wish console.log(myList) did!

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
        var newNode = new Node(value);
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
    findSum(){
        let runner = this.head;
        let sum = 0;
        while(runner != null){
            sum += runner.value;
            runner = runner.next;
        }
        return sum;
    }
    contains(value){
        var runner = this.head;
        while(runner != null){
            if (runner.value == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length(){
        var runner = this.head;
        var length = 1;
        while(runner){
            length += 1;
            runner = runner.next;
        }
        return length
    }
    display(){
        var runner = this.head;
        var count = 1;
        while(runner != null){
            console.log("Node"+count+": " + runner.value);
            runner = runner.next;
            count = count + 1;
        }
        return this;
    }
}

var mySLL = new SLL();
var myNode = new Node(7);
var myNode2 = new Node(20);
var myNode3 = new Node(15);
mySLL.head = myNode;
myNode.next = myNode2;
myNode2.next = myNode3;

mySLL.addFront(9);
console.log(mySLL.front());

mySLL.removeFront();
console.log(mySLL.front());

console.log(mySLL.contains(7));
console.log(mySLL.contains(4));

console.log(mySLL.length());

mySLL.display();

console.log(mySLL.findSum());

