const Queue = require('../src/Queue')

let test = () => {
    let queue = new Queue(20);
    console.assert(queue.head === 0, 'Queue head should be at 0 after creation.');
    console.assert(queue.tail === 0, 'Queue tail should be at 0 after creation.');

    queue.enqueue(3);
    console.assert(queue.tail === 1, 'Queue tail should be at 1 after adding the first element.');
    console.assert(queue.head === 0, 'Queue head should be at 0 until the first dequeue.');
    console.assert(queue.data[queue.head] === 3, 'Queue tail should return the first enqueued element.');

    queue.enqueue(4);
    console.assert(queue.tail === 2, 'Queue tail should be at 2 after adding the second element.');
    console.assert(queue.head === 0, 'Queue head should be at 0 until the first dequeue.');
    console.assert(queue.data[queue.head] === 3, 'Queue tail should return the first enqueued element.');

    queue.enqueue(5);
    console.assert(queue.tail === 3, 'Queue tail should be at 3 after adding the third element.');
    console.assert(queue.head === 0, 'Queue head should be at 0 until the first dequeue.');

    console.assert(queue.dequeue() === 3, 'First dequeue should return 3.');
    console.assert(queue.dequeue() === 4, 'Second dequeue should return 4.');
    console.assert(queue.dequeue() === 5, 'Third dequeue should return 5.');

}

test();