module.exports = class Queue {
    constructor(length) {
        this.head = 0;
        this.tail = 0;

        this.data = [];

        for (let i = 0; i < length; i++) {
            this.data.push(null);
        }
    }

    enqueue(x) {
        this.data[this.tail] = x;

        if (this.tail === this.data.length - 1) {
            this.tail = 0;
        } else {
            this.tail++;
        }
    }

    dequeue() {
        let x = this.data[this.head];

        if (this.head === this.data.length - 1) {
            this.head = 0;
        } else {
            this.head++;
        }

        return x;
    }
}