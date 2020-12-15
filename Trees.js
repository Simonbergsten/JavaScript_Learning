/* Root - The top node of the tree */
/* Child - A node directly connected to another node when moving away from the Root */

class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if (!this.root  === null){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true){
                if (value === current.value) return undefined;
                if (value < current.value){
                    if (current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    current.right = newNode;
                    return this;
                } else {
                    if (current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root, found = false;
        while (current && !found){
            if (value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

}

/*
var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
*/


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);



