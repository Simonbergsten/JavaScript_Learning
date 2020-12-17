class TreeNode{
    constructor(data){
        this._left = null;
        this._right = null;
        this._data = data;
    }

    insert(val){
        if (val === this._data) return;

        if (val < this._data){
            if (this._left === null){
                this._left = new TreeNode(val);
            }
            else {
                this._left.insert(val);
            }
        }
        else  {
            if (this._right === null){
                this._right = new TreeNode(val);
            } else {
                this._right.insert(val);
            }
        }
    }

    get(value){
        if (value === this._data){
            console.log(`Value ${value} found in BST.`)
            //return this.data;
        }
        if (value < this._data){
            if (this._left !== null){
                return this._left.get(value);
            }
        }
        else {
            if (this._right !== null ){
                return this._right.get(value);
            }
        }

        return null;
    }

    min(){
        if (this._left === null){
            return this._data;
        }
        else {
            return this._left.min();
        }
    }

    max(){
        if (this._right == null){
            return this._data;
        }
        else {
            return this._right.max();
        }
    }


    traverseInOrder(){
        if (this._left !== null){
            this._left.traverseInOrder();
        }
        console.log(`${this._data}`);
        if (this._right !== null){
            this._right.traverseInOrder();
        }

    }


    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get left() {
        return this._left;
    }

    set left(value) {
        this._left = value;
    }

    get right() {
        return this._right;
    }

    set right(value) {
        this._right = value;
    }
}


class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        if (this.root === null) {
            this.root = new TreeNode(value);
        }
        else {
            this.root.insert(value);
        }
    }

    traverseInOrder(){
        if (this.root !== null){
            this.root.traverseInOrder();
        }
    }

    get(value){
        if (this.root !== null){
            return this.root.get(value);
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

    min(){
        if (this.root == null){
            return -Infinity;
        }
        else {
            return this.root.min();
        }
    }

    delete(value){
        this.root = _delete(this.root, value)
    }

    _delete(subTreeRoot, value){
        if (subTreeRoot === null){
            return subTreeRoot;
        }

        if (value < subTreeRoot.data()){
            subTreeRoot.left(delete(subTreeRoot.left() , value));
        }

        else if (value > subTreeRoot.data()) {
            subTreeRoot.right(delete(subTreeRoot.right() , value));
        }
        else {
            // Cases 0 and 1: Node to delete has 0 or 1 children.
            if (subTreeRoot.left() === null){
                return subTreeRoot.right();
            }
            else if (subTreeRoot.right() === null){
                return subTreeRoot.left();
            }

            // Case 3: Node to delete has 2 children

            // Replace the value in the subtreeRoot node with the smallest value
            // from the right subtree
            subTreeRoot.data(subTreeRoot.right().min());

            // Delete the node that has the smallest value in the right subtree
            subTreeRoot.data(delete(subTreeRoot.right(), subTreeRoot.data()));
        }

        return subTreeRoot;
    }

    BFS(){
        var node = this.root;
        const data = [];
        const queue = [];

        queue.push(node);
        while (queue.length){
            node = queue.shift()
            data.push(node);
        }
        return data;
    }

    DFSPreOrder(){
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSInOrder(){
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }


}


// TODO [1]: Create insert method
// TODO [2]: Create Remove method
// TODO [3]: Create min/max method
// TODO [4]: Create traversal method


tree = new BST();
tree.insert(25);
tree.insert(20);
tree.insert(15);
tree.insert(27);
tree.insert(30);
tree.insert(29);
tree.insert(26);
tree.insert(22);
tree.insert(32);
tree.traverseInOrder();
tree.get(27);
console.log(`Min value = ${tree.min()}`);
console.log(`Max value = ${tree.max()}`);
