const TreeNode = require('./supporting/TreeNode');

module.exports = class Huffman {
    constructor() {
        this.root = null;
    }

    huffman(queue) {
        let length = queue.heapSize;

        for (let i = 1; i < length; i++) {
            let node = new TreeNode(null);

            // Get the 2 lowest elements
            node.left = queue.heapExtractMin();
            node.right = queue.heapExtractMin();

            // Each element in the queue should have a freq property
            node.freq = node.left.freq + node.right.freq;

            queue.minHeapInsert(node);
        }
    }
}