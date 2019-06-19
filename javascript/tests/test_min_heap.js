const MinHeap = require('../src/MinHeap')

let testMinHeapify = () => {
    let data = {
        1: 5,
        2: 2,
        3: 4,
        4: 6,
        5: 1,
        6: 3
    }

    let heap = new MinHeap(data);

    heap.minHeapify(3);
    console.assert(heap.data[3] === 3, "Keys 3 and 6 should have switched values after min-heapify(3).");
    console.assert(heap.data[6] === 4, "Keys 3 and 6 should have switched values after min-heapify(3).");
}

let testBuildMinHeap = () => {
    let data = {
        1: 5,
        2: 2,
        3: 4,
        4: 6,
        5: 1,
        6: 3
    }

    let heap = new MinHeap(data);

    heap.buildMinHeap();

    console.assert(
        heap.data[1] === 1 &&
        heap.data[2] === 2 &&
        heap.data[3] === 3 &&
        heap.data[4] === 6 &&
        heap.data[5] === 5 &&
        heap.data[6] === 4,
        'Data should be a min-heap.'
    );
}

let testHeapSort = () => {
    let data = {
        1: 5,
        2: 2,
        3: 4,
        4: 6,
        5: 1,
        6: 3
    }

    let heap = new MinHeap(data);

    heap.heapSort();

    console.assert(
        heap.data[1] === 6 &&
        heap.data[2] === 5 &&
        heap.data[3] === 4 &&
        heap.data[4] === 3 &&
        heap.data[5] === 2 &&
        heap.data[6] === 1,
        'Data should be sorted.'
    );
}

testMinHeapify();
testBuildMinHeap();
testHeapSort();