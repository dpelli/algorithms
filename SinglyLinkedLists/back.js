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
    }
}

var mySLL = new SLL();
var myNode = new Node(7);
var myNode2 = new Node(20);
var myNode3 = new Node(15);
myNode.next = myNode2;
myNode2.next = myNode3;
mySLL.head = myNode;

// mySLL.addFront(9);
// console.log(mySLL.front());

// mySLL.removeFront();
// console.log(mySLL.front());

// console.log(mySLL.contains(7));
// console.log(mySLL.contains(4));

// console.log(mySLL.length());

// mySLL.display();

// console.log(mySLL.findSum());

// console.log(mySLL.max());
// console.log(mySLL.min());
// console.log(mySLL.avg());
// console.log(mySLL.back());

// mySLL.removeBack();
// console.log(mySLL.back());

mySLL.addBack(200);
console.log(mySLL.back());
