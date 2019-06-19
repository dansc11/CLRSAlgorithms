const TreeNode = require('./supporting/TreeNode');

module.exports = class BinarySearchTree {
    constructor(array) {
        this.root = null;
        this.nil = new TreeNode(null);

        for (let i = 0; i < array.length; i++) {
            this.insert(array(i));
        }
    }

    insert(newNode) {
        let parent = this.nil;
        let x = this.root;

        while (x !== this.nil) {
            parent = x;

            if (newNode.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        newNode.parent = parent;

        if (parent = this.nil) {
            // the tree is still empty, so we are still at the root
            // set the node as the root
            this.root = newNode;
        } else if (newNode.key < parent.key) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        newNode.left = this.nil;
        newNode.right = this.nil;
        newNode.colour = "RED";

        this.insertFixup(newNode);
    }

    insertFixup(node) {
        while (node.parent.colour == "RED") {

            if (node.parent === node.parent.parent.left) {
                // Parent is a left child
                let uncle = node.parent.parent.right;

                // Case 1 - red uncle
                if (uncle.colour === "RED") {
                    // Make parent and uncle BLACK
                    node.parent.colour = "BLACK";
                    uncle.colour = "BLACK";
                    // Make grandparent RED
                    node.parent.parent.colour = "RED";

                    // Grandparent may violate RBT properties, so move up the tree and fix again
                    node = node.parent.parent;
                }

                // Case 2 - black uncle
                // Node and parent are on different sides of their parents
                // "Triangle" - needs to be converted to a line (case 3)
                else if (node === node.parent.right) {
                    node = node.parent;
                    // Convert to case 3
                    this.leftRotate(node);
                }

                // Case 3 - black uncle
                // Node and parent are on same side of their parents
                // "Line"
                node.parent.colour = "BLACK";
                node.parent.parent.colour = "RED";
                this.rightRotate(node.parent.parent);
            }

            else {
                // Parent is a right child
                // Repeat with sides swapped
                let uncle = node.parent.parent.left;

                // Case 1 - red uncle
                if (uncle.colour === "RED") {
                    // Make parent and uncle BLACK
                    node.parent.colour = "BLACK";
                    uncle.colour = "BLACK";
                    // Make grandparent RED
                    node.parent.parent.colour = "RED";

                    // Grandparent may violate RBT properties, so move up the tree and fix again
                    node = node.parent.parent;
                }

                // Case 2 - black uncle
                // Node and parent are on different sides of their parents
                // "Triangle" - needs to be converted to a line (case 3)
                else if (node === node.parent.left) {
                    node = node.parent;
                    // Convert to case 3
                    this.rightRotate(node);
                }

                // Case 3 - black uncle
                // Node and parent are on same side of their parents
                // "Line"
                node.parent.colour = "BLACK";
                node.parent.parent.colour = "RED";
                this.leftRotate(node.parent.parent);
            }
        }
    }

    leftRotate(node) {
        let rightChild = node.right;

        // Right child's left subtree becomes the target node's right subtree
        node.right = rightChild.left;

        if (rightChild.left !== this.nil) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        // Check if the target node is the root before updating its parent
        if (node.parent === this.nil) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        // The right child becomes the target node's parent
        rightChild.left = node;
        node.parent = rightChild;
    }

    rightRotate(node) {
        let leftChild = node.left;

        // Left child's right subtree becomes the target node's left subtree
        node.left = leftChild.right;

        if (leftChild.right !== this.nil) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        // Check if the target node is the root before updating its parent
        if (node.parent === this.nil) {
            this.root = leftChild;
        } else if (node === node.parent.left) {
            node.parent.left = leftChild;
        } else {
            node.parent.right = leftChild;
        }

        // The right child becomes the target node's parent
        leftChild.right = node;
        node.parent = leftChild;
    }
}