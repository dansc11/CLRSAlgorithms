const LinkedListElement = require('./supporting/LinkedListElement')

module.exports = class LinkedList {
    constructor() {
        this.nil = new LinkedListElement(null);
        this.nil.next = this.nil;
        this.nil.prev = this.nil;
    }

    search(key) {
        let x = this.nil.next;

        while (x !== this.nil && x.key !== key) {
            x = x.next;
        }

        return x;
    }

    insert(element) {
        element.next = this.nil.next;
        this.nil.next.prev = element;
        this.nil.next = element;
        element.prev = this.nil;
    }

    delete(element) {
        element.prev.next = element.next;
        element.next.prev = element.prev;
    }
}