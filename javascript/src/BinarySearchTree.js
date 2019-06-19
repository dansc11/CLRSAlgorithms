const TreeNode = require('./supporting/TreeNode');

module.exports = class BinarySearchTree {
    constructor(array) {
        this.root = null;

        for (let i = 0; i < array.length; i++) {
            this.insert(array(i));
        }
    }

    insert(key) {
        let newNode = new TreeNode(key);

        let parent = null;
        let x = this.root;

        while (x !== null) {
            parent = x;

            if (newNode.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        newNode.parent = parent;

        if (parent === null) {
            // The tree was empty - we are still at the root
            this.root = newNode;
        } else if (newNode.key < parent.key) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
    }

    delete(node) {
        if (node.left === null) {
            // replace with right child
            // could be null, i.e. no children, so replace the deleted node with null
            this.transplant(node, node.right);
        } else if (node.right === null) {
            // replace with left child (we know it isn't null)
            this.transplant(node, node.left);
        } else {
            // node has 2 children
            // get the successor - the next smallest element
            let successor = this.minimum(node.right);

            if (successor.parent !== node) {
                // move the successor's right child up to it's own position
                this.transplant(successor, successor.right);
                successor.right = node.right;
                node.right.parent = successor;
            }

            // move the successor up to the position of the deleted node
            this.transplant(node, successor);

            successor.left = node.left;
            successor.left.parent = successor;
        }
    }

    transplant(parentNode, successorNode) {
        if (parentNode.parent === null) {
            this.root = successorNode;
        } else if (parentNode === parentNode.parent.left) {
            parentNode.parent.left = successorNode;
        } else {
            parentNode.parent.right = successorNode;
        }

        if (successorNode !== null) {
            successorNode.parent = parentNode.parent;
        }
    }

    search(rootNode, key) {
        if (rootNode === null || rootNode.key === key) {
            return rootNode;
        }

        if (key < rootNode.key) {
            return this.search(rootNode.left, key);
        }

        return this.search(rootNode.right, key);
    }

    inorderTreeWalk(rootNode) {
        if (rootNode !== null) {
            this.inorderTreeWalk(rootNode.left);
            console.log(rootNode.key);
            this.inorderTreeWalk(rootNode.right);
        }
    }

    preorderTreeWalk(rootNode) {
        if (rootNode !== null) {
            console.log(rootNode.key);
            this.preorderTreeWalk(rootNode.left);
            this.preorderTreeWalk(rootNode.right);
        }
    }

    postorderTreeWalk(rootNode) {
        if (rootNode !== null) {
            this.postorderTreeWalk(rootNode.left);
            this.postorderTreeWalk(rootNode.right);
            console.log(rootNode.key);
        }
    }

    minimum(rootNode) {
        let node = rootNode;

        while (node.left !== null) {
            node = node.left;
        }

        return node.key;
    }

    maximum(rootNode) {
        let node = rootNode;

        while (node.right !== null) {
            node = node.right;
        }

        return node.key;
    }

    successor(node) {
        if (node.right !== null) {
            return this.minimum(node.right);
        }

        let parent = node.parent;

        while (parent !== null && node === parent.right) {
            node = parent;
            parent = parent.parent;
        }

        return parent;
    }

    predecessor(node) {
        if (node.left !== null) {
            return this.maximum(node.left);
        }

        let parent = node.parent;

        while (parent !== null && node === parent.left) {
            node = parent;
            parent = parent.parent;
        }
    }
}