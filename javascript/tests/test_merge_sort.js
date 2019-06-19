const MergeSort = require('../src/MergeSort')

let test = () => {
    let data = [5, 2, 4, 6, 1, 3];
    let mergeSort = new MergeSort(data);

    mergeSort.sort(0, data.length - 1);
    mergeSort.merge(0, 2, 5);

    console.assert(
        mergeSort.data[0] === 1 &&
        mergeSort.data[1] === 2 &&
        mergeSort.data[2] === 3 &&
        mergeSort.data[3] === 4 &&
        mergeSort.data[4] === 5 &&
        mergeSort.data[5] === 6,
        'Numbers 1 to 6 should be sorted.'
    );
}

test();