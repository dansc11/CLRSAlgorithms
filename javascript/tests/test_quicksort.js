const QuickSort = require('../src/QuickSort')

let testPartition = () => {
    let data = {
        1: 5,
        2: 2,
        3: 4,
        4: 6,
        5: 1,
        6: 3
    }

    let quickSort = new QuickSort(data);

    let partition = quickSort.partition(1, Object.keys(quickSort.data).length);

    console.assert(partition === 3, "Partition should return 3.");

    console.assert(
        quickSort.data[1] <= quickSort.data[3] &&
        quickSort.data[2] <= quickSort.data[3],
        "Elements before the partition should be smaller than or equal to the pivot value."
    );

    console.assert(
        quickSort.data[4] > quickSort.data[3] &&
        quickSort.data[5] > quickSort.data[3] &&
        quickSort.data[6] > quickSort.data[3],
        "Elements before the partition should be larger than the pivot value."
    );
}

let testQuicksort = () => {
    let data = {
        1: 5,
        2: 2,
        3: 4,
        4: 6,
        5: 1,
        6: 3
    }

    let quickSort = new QuickSort(data);
    quickSort.quickSort(1, Object.keys(quickSort.data).length);

    console.assert(
        quickSort.data[1] === 1 &&
        quickSort.data[2] === 2 &&
        quickSort.data[3] === 3 &&
        quickSort.data[4] === 4 &&
        quickSort.data[5] === 5 &&
        quickSort.data[6] === 6,
        'Numbers 1 to 6 should be sorted.'
    );
}

testPartition();
testQuicksort();