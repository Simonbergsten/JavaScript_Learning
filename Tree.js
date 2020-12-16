
class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(val){
        if (val === this.value) return;

        if (val < this.value){
            if (this.left === null){
                this.left = new TreeNode(val);
            }
            else {
                this.left.insert(val);
            }
        }
        else  {
            if (this.right === null){
                this.right = new TreeNode(val);
            } else {
                this.right.insert(val);
            }
        }
    }

    traverseInOrder(){
        if (!this.left === null) {
            this.left.traverseInOrder();
        }
        console.log(`${this.value} , `);
        if (!this.right === null){
            this.right.traverseInOrder()
        }
    }

    get(val){
        if (val === this.value){
            return this;
        }
        if (val < this.value){
            if (this.left !== null){
                return this.left.get(val)
            }
        }
        else {
            if (this.right !== null) {
                return this.right.get(val)
            }
        }
        return null;
    }

    min(){
        if (this.left === null){
            return this.value;
        }
        else {
            return this.left.min();
        }
    }

    max(){
        if (this.right == null){
            return this.value;
        }
        else {
            return this.right.max();
        }
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    insert(val){
        if (this.root === null){
            this.root = new TreeNode(val);
        }
        else {
            this.root.insert(val)
        }
    }

    traverseInOrder(){
        if (!this.root === null){
            this.root.traverseInOrder();
        }
    }

    get(val){
        if (this.root !== null){
            return this.root.get(val)
        }
        return null;
    }

    min(){
        if (this.root == null){
            return -Infinity;
        }
        else {
            return this.root.min();
        }
    }

    max(){
        if (this.root == null){
            return Infinity;
        }
        else {
            return this.root.max();
        }
    }

    delete(val){
        var root = delete(this.root, val);
    }
    
}

tree = new Tree();
tree.insert(25);
tree.insert(20);
tree.insert(15);
tree.insert(27);
tree.insert(30);
tree.insert(29);
tree.insert(26);
tree.insert(22);
tree.insert(32);

console.log(tree.get(27));
console.log(tree.max());



