module.exports = class Stack {
    constructor(length) {
        this.top = 0;
        
        this.data = [];

        for (let i = 0; i < length; i++) {
            this.data.push(null);
        }
    }

    stackEmpty() {
        if (this.top === 0) {
            return true;
        }

        return false;
    }

    push(x) {
        if (this.top >= this.n) {
            throw "stack overflow"
        }

        this.top++;
        this.data[this.top] = x;
    }

    pop() {
        if (this.stackEmpty()) {
            throw "stack underflow";
        }

        this.top--;
        return this.data[this.top + 1];
    }
}