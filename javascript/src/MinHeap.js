const Heap = require('./supporting/Heap');

module.exports = class MinHeap extends Heap {
    minHeapify(i) {
        let l = this.left(i);
        let r = this.right(i);

        let smallest;

        if (l <= this.heapSize && this.data[l] < this.data[i]) {
            smallest = l;
        } else {
            smallest = i;
        }

        if (r <= this.heapSize && this.data[r] < this.data[smallest]) {
            smallest = r;
        }

        if (smallest !== i) {
            let key = this.data[i];

            this.data[i] = this.data[smallest];
            this.data[smallest] = key;

            this.minHeapify(smallest);
        }
    }

    buildMinHeap() {
        let internalSize = Math.floor(this.heapSize / 2);

        for (let i = internalSize; i > 0; i--) {
            this.minHeapify(i);
        }
    }

    heapSort() {
        this.buildMinHeap();

        for (let i = this.heapSize; i >= 2; i--) {
            let root = this.data[1];

            this.data[1] = this.data[i];
            this.data[i] = root;

            this.heapSize--;

            this.minHeapify(1);
        }
    }
}