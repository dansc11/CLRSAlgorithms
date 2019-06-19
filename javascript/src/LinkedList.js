module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }

    search(key) {
        let x = this.head;

        while (x !== null && x.key !== key) {
            x = x.next;
        }

        return x;
    }

    insert(element) {
        element.next = this.head;
        element.prev = null;

        if (this.head !== null) {
            this.head.prev = element;
        }

        this.head = element;
    }

    delete(element) {
        if (element.prev !== null) {
            element.prev.next = element.next;
        } else {
            this.head = element.next;
        }


        if (element.next !== null) {
            element.next.prev = element.prev;
        }
    }
}