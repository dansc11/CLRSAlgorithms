const Array = require('./supporting/Array');

module.exports = class InsertionSort extends Array {
    length() {
        return this.data.length;
    }

    sort() {
        for (let j = 1; j < this.length(); j++) {
            let key = this.data[j];

            let i = j - 1;

            while (i >= 0 && this.data[i] > key) {
                this.data[i + 1] = this.data[i];
                i--;
            }

            this.data[i + 1] = key;
        }
    }
}