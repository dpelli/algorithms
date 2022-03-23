// Move
// SList: Move Min to Front
// Create a standalone function that locates the minimum value in a linked list, 
// and moves that node to the front of the list. Return the new list, with all nodes still present, 
// and all (except for the new head node) in their original order.

// SList: Move Max to Back
// Create a standalone function that locates the maximum value in a linked list, 
// and moves that node to the back of the list. Return the new list, with all nodes still present, 
// and all in their original order except for the node you moved to the end of the singly linked list.

// Max/Min/Avg

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
        return length;
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
    max(){
        var runner = this.head;
        var max = this.head.value;
        while(runner != null){
            if (runner.value >= max){
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }
    min(){
        var runner = this.head;
        var min = this.head.value;
        while(runner != null){
            if (runner.value <= min){
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
    avg(){
        var runner = this.head;
        var sum = 0;
        var count = 0;
        while(runner != null){
            sum = sum + runner.value;
            runner = runner.next;
            count = count + 1;
        }
        var avg = sum / count;
        return avg;
    }
    back() {
        var runner = this.head;
        var last = this.head.value;
        while(runner != null){
            last = runner.value;
            runner = runner.next;
        }
        return last;    
    }
    removeBack() {
        if (this.head != null){
            if(this.head.next == null){
                this.head = null;
            } 
            else{
                var runner = this.head;
                while(runner.next.next != null){
                    runner = runner.next;
                }
            }
        }
        var lastNode = runner.next;
        runner.next = null;
        lastNode = null;
    }
    addBack(value) {
        var newNode = new Node(value);
        if (this.head != null){
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            } 
            runner.next = newNode;
            }
        else{
            this.head = newNode;
        }
        return this;
    }
}

var mySLL = new SLL();
mySLL.addBack(200).addBack(100).addBack(15).addBack(3).addBack(75)

console.log(mySLL)

function min_to_front(sll){
    var runner = sll.head;
    var min = sll.head.value;
    while(runner.next != null){
        if (runner.next.value <= min){
            min = runner.next.value;
            var minNode = runner.next;
            var beforeNode = runner;
        }
        runner = runner.next;
    }
    beforeNode.next = minNode.next;
    minNode.next = sll.head;
    sll.head = minNode;
    return sll;
}

console.log(min_to_front(mySLL))

function max_to_back(sll){
    var runner = sll.head;
    var max = sll.head.value;
    while(runner.next != null){
        if (runner.next.value >= max){
            max = runner.next.value;
            var maxNode = runner.next;
            var beforeNode = runner;
            var afterNode = runner.next.next;
        }
        runner = runner.next;
    }
    beforeNode.next = afterNode.next;
    sll.addBack(maxNode);
    maxNode.next = null;
    return sll;
}

console.log(max_to_back(mySLL))
console.log(mySLL.back())
