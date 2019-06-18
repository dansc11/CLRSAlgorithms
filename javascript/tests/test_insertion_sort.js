const InsertionSort = require('../src/InsertionSort')

let test = () => {
    let data = [5, 2, 4, 6, 1, 3];
    let insertionSort = new InsertionSort(data);

    insertionSort.sort();

    console.assert(
        insertionSort.data[0] === 1 &&
        insertionSort.data[1] === 2 &&
        insertionSort.data[2] === 3 &&
        insertionSort.data[3] === 4 &&
        insertionSort.data[4] === 5 &&
        insertionSort.data[5] === 6,
        'Numbers 1 to 6 should be sorted.'
    );
}

test();