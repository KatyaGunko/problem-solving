class MaxHeap {
    constructor() {
        this.heap = [];
    }

    add(val) {
        this.heap.push(val);

        let index = this.heap.length - 1;
        let current = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // INDEX OF PARENT
            let parent = this.heap[parentIndex];

            if (parent < current) {
                [this.heap[parentIndex], this.heap[index]] = [current, parent];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    deleteTop() {
        const top = this.heap.shift();
        const last = this.heap.pop();
        this.heap.unshift(last);

        let currIndex = 0;
        let childIndex;

        while(true) {
            let left = 2 * currIndex + 1; // INDEX OF LEFT CHILD
            let right = 2 * currIndex + 2; // INDEX OF RIGHT

            if (this.heap[left] && this.heap[right]) {
                if (this.heap[left] > this.heap[right]) {
                    childIndex = left;
                } else {
                    childIndex = right;
                }
            } else if (this.heap[left]) {
                childIndex = left;
            } else {
                childIndex = right;
            }

            if (this.heap[childIndex] > this.heap[currIndex]) {
                [this.heap[childIndex], this.heap[currIndex]] = [this.heap[currIndex], this.heap[childIndex]];
                currIndex = childIndex;
            } else {
                break;
            }
        }

        return top;
    }
}

const tree = new MaxHeap();

tree.add(3);
tree.add(4);
tree.add(31);
tree.add(6);
tree.add(0);
tree.add(12);

console.log(tree.deleteTop());
console.log(tree.deleteTop());
console.log(tree.deleteTop());
console.log(tree.deleteTop());
console.log(tree.deleteTop());