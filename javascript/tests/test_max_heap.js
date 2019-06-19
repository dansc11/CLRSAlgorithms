const MaxHeap = require('../src/MaxHeap')

let testParentLeftRight = () => {
    let heap = new MaxHeap([]);

    console.assert(heap.parent(1) === 0, 'Parent of element 1 should be 0.');
    console.assert(heap.parent(2) === 1, 'Parent of element 2 should be 1.');
    console.assert(heap.parent(3) === 1, 'Parent of element 3 should be 1.');
    console.assert(heap.parent(4) === 2, 'Parent of element 4 should be 1.');
    console.assert(heap.parent(5) === 2, 'Parent of element 5 should be 2.');
    console.assert(heap.parent(6) === 3, 'Parent of element 6 should be 3.');

    console.assert(heap.left(2) === 4, "Position of left element should be double the current element's position.");
    console.assert(heap.right(2) === 5, "Position of right element should be double plus 1 the current element's position.");
}

let testMaxHeapify = () => {
    let data = {
        1: 5,
        2: 2,
        3: 4,
        4: 6,
        5: 1,
        6: 3
    }

    let heap = new MaxHeap(data);

    heap.maxHeapify(2);
    console.assert(heap.data[2] === 6, "Keys 2 and 4 should have switched values after max-heapify(2).");
    console.assert(heap.data[4] === 2, "Keys 2 and 4 should have switched values after max-heapify(2).");
    console.assert(heap.data[5] === 1, "Key 5 should not have changed after max-heapify(2).");
}

let testBuildMaxHeap = () => {
    let data = {
        1: 5,
        2: 2,
        3: 4,
        4: 6,
        5: 1,
        6: 3
    }

    let heap = new MaxHeap(data);

    heap.buildMaxHeap();

    console.assert(
        heap.data[1] === 6 &&
        heap.data[2] === 5 &&
        heap.data[3] === 4 &&
        heap.data[4] === 2 &&
        heap.data[5] === 1 &&
        heap.data[6] === 3,
        'Data should be a max-heap.'
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

    let heap = new MaxHeap(data);

    heap.heapSort();

    console.assert(
        heap.data[1] === 1 &&
        heap.data[2] === 2 &&
        heap.data[3] === 3 &&
        heap.data[4] === 4 &&
        heap.data[5] === 5 &&
        heap.data[6] === 6,
        'Data should be sorted.'
    );
}

testParentLeftRight();
testMaxHeapify();
testBuildMaxHeap();
testHeapSort();