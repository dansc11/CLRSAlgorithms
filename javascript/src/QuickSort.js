const Array = require('./supporting/Array');

module.exports = class QuickSort extends Array {
    length() {
        return Object.keys(this.data).length;
    }

    partition(p, r) {
        let pivot = this.data[r];
        let i = p - 1;

        for (let j = p; j < r; j++) {
            if (this.data[j] <= pivot) {
                i++;
                let valueI = this.data[i];
                this.data[i] = this.data[j];
                this.data[j] = valueI;
            }
        }

        let valueI = this.data[i + 1];
        this.data[i + 1] = this.data[r];
        this.data[r] = valueI;

        return i + 1;
    }

    quickSort(p, r) {
        if (p < r) {
            let q = this.partition(p, r);
            this.quickSort(p, q - 1);
            this.quickSort(q + 1, r);
        }
    }
}