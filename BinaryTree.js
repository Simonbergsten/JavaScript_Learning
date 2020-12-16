var binaryTreeNode = function (value) {
    return {
        value : value,
        left : null,
        right: null
    };
};


var binarySearchTree = function () {
    var tree = Object.create(binarySearchTreeMethods);
    tree.root = null;
    return tree;
};


var binarySearchTreeMethods =  {

    insert : function (value, node) {
        var newNode = binaryTreeNode(value);

        // check if tree is empty
        if (this.isEmpty()) {
            this.root = newNode;
            return
        }

        // Initialize node
        if (node === void 0) node = this.root;

        // Compare value with node.value
        if (value <= node.value) {
            if (node.left) {
                this.insert(value, node.left);
            }
            else {
                node.left = newNode;
            }
        }
        else {
            if (node.right){
                this.insert(value, node.right);
            } else {
                node.right = newNode;
            }
        }
        
    },

    remove: function(value) {
        this.root = this._removeInner(value, this.root);
    },

    _removeInner: function(value, node){
        if (node) {
            if (value < node.value){
                node.right = this._removeInner(value, node.left);
            }
            else if (value > node.value){
                node.right = this._removeInner(value, node.right);
            }
            else if (node.left && node.right){
                node.value = this.findMinValue(node.right);
                node.right = this._removeInner(node.value, node.right);
            }
            else {
                node = node.left || node.right;
            }
        }
        return node;
    },



    contains: function(value, node){
        if (this.isEmpty()) return false;
        // tree is not empty - initialize node
        if (node === void 0) node = this.root;

        // check if node's value is the value
        if (value === node.value) return true;
        if (value < node.value) {
            // check if left node exists
            return node.left ? this.contains(value, node.left) : false;
        } else {
            // check if right node exists
            return node.right ? this.contains(value, node.right) : false;
        }
    },

    findMaxValue: function (node) {
        if (!this.isEmpty()) {
            if (node === void 0) node = this.root;
            while (node.right) {
                node = node.right;
            }
            return node.value;
        }
    }
    ,

    findMinValue: function(node){
        if (!this.isEmpty()) {
            if (node === void 0) node = this.root;
            while(node.left){
                node = node.left;
            }
            return node.value;
        }
    },

    getHeight : function(node) {
        if (!this.isEmpty()){
            // initialize node
            if (node === void 0) node = this.root;

            // base case
            if (node.left === null && node.right === null) return 0;
            if (node.left === null)  return 1 + this.getHeight(node.right);
            if (node.right === null) return 1 + this.getHeight(node.left);
            return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        }
    },

    isEmpty: function() {
        return this.root === null;
    },

    inOrder: function (node) {
        if (!(node === null)) {
            inOrder(node.left);
            console.log(node.data + " ");
            inOrder(node.right);
        }
        
    }

    
};


tree = new BinarySearchTree();
tree.insert(25);
tree.insert(20);
tree.insert(30);
tree.insert(27);
tree.insert(21);
tree.insert(16);
tree.insert(26);
tree.insert(35);

tree.remove(30);

console.log("Inoder: ");
console.log(tree.inOrder(tree.root));
