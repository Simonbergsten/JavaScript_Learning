class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = this.tail = newNode;
            this.length++
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length ++;

        return this;
    }

    secondLastNode(){
        let secondLast
        let last = this.head
        while(last.next){
            secondLast = last
            last = last.next;
        }
        return secondLast
    }

    pop(){
        if (!this.head){
            return null;
        }else if(this.length === 1){
            let popped = this.head;
            this.head = this.tail = null;
            this.length = 0;
            return popped;
        }else{
            let popped=this.tail;
            let secondLast = this.secondLastNode();
            secondLast.next=null;
            this.tail=secondLast;
            this.length--
            return popped;
        }
    }

}

