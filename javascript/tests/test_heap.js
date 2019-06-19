const Heap = require('../src/supporting/Heap')

let testParent = () => {
    let heap = new Heap([]);

    console.assert(heap.parent(1) === 0, 'Parent of element 1 should be 0.');
    console.assert(heap.parent(2) === 1, 'Parent of element 2 should be 1.');
    console.assert(heap.parent(3) === 1, 'Parent of element 3 should be 1.');
    console.assert(heap.parent(4) === 2, 'Parent of element 4 should be 1.');
    console.assert(heap.parent(5) === 2, 'Parent of element 5 should be 2.');
    console.assert(heap.parent(6) === 3, 'Parent of element 6 should be 3.');
}

let testLeft = () => {
    let heap = new Heap([]);

    console.assert(heap.left(2) === 4, "Position of left element should be double the current element's position.");
}

let testRight = () => {
    let heap = new Heap([]);

    console.assert(heap.right(2) === 5, "Position of right element should be double plus 1 the current element's position.");
}

testParent();
testLeft();
testRight();