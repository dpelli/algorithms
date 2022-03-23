// Contains
// Add a method contains(value) to your SLL class, which is given a value as a parameter.  
// Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

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
    // addFront(value){
    //     var newNode = new Node(value);
    //     newNode.next = this.head;
    //     this.head = newNode;
    //     return this.head;
    // }
    // removeFront(){
    //     if (this.head == null){
    //         return null;
    //     }
    //     this.head = this.head.next;
    //     return this.head;
    // }
    // front(){
    //     if (this.head == null){
    //         return null;
    //     }
    //     return this.head.value;
    // }
    // contains(value){
    //     var runner = this.head;
    //     while(runner != null){
    //         if (runner.value == value){
    //             return True;
    //         }
    //         runner = runner.next;
    //     }
    //     return False;
    // }
    length(){
        var runner = this.head;
        var length = 1;
        while(runner){
            length += 1;
            runner = runner.next;
        }
        return length
    }
}

myNode = new Node(7);
mySLL = new SLL();
mySLL.head = myNode;
