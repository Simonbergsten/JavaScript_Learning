class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(value){
        if (value === this.data) return;

        if (value < this.data){
            if (this.left === null){
                this.left = new TreeNode(value);
            }
            else {
                this.left.insert(value);
            }
        }
        else {
            if (this.right === null) {
                this.right = value;
            }
            else {
                this.right.insert(value);
            }
        }
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

