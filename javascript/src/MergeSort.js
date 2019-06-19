const Array = require('./supporting/Array');

module.exports = class MergeSort extends Array {
    length() {
        return this.data.length;
    }

    merge(p, q, r) {
        let left = this.data.slice(p, q);
        left.push(Infinity);

        let right = this.data.slice(q, r + 1);
        right.push(Infinity);

        let le = 0;
        let ri = 0;

        for (let k = p; k <= r; k++) {
            if (left[le] <= right[ri]) {
                this.data[k] = left[le];
                le++;
            } else {
                this.data[k] = right[ri];
                ri++;
            }
        }
    }

    sort(p, r) {
        if (p < r) {
            let q = Math.floor((p + r) / 2);

            this.sort(p, q);
            this.sort(q + 1, r);

            this.merge(p, q, r);
        }
    }
}