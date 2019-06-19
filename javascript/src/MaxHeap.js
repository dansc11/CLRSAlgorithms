const Heap = require('./supporting/Heap');

module.exports = class MaxHeap extends Heap {
    maxHeapify(i) {
        let l = this.left(i);
        let r = this.right(i);

        let largest;

        if (l <= this.heapSize && this.data[l] > this.data[i]) {
            largest = l;
        } else {
            largest = i;
        }

        if (r <= this.heapSize && this.data[r] > this.data[largest]) {
            largest = r;
        }

        if (largest !== i) {
            let key = this.data[i];

            this.data[i] = this.data[largest];
            this.data[largest] = key;

            this.maxHeapify(largest);
        }
    }

    buildMaxHeap() {
        let internalSize = Math.floor(this.heapSize / 2);

        for (let i = internalSize; i > 0; i--) {
            this.maxHeapify(i);
        }
    }

    heapSort() {
        this.buildMaxHeap();

        for (let i = this.heapSize; i >= 2; i--) {
            let root = this.data[1];

            this.data[1] = this.data[i];
            this.data[i] = root;

            this.heapSize--;

            this.maxHeapify(1);
        }
    }
}