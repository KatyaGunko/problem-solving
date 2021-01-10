class DisjointSet {
    constructor(size) {
        this.size = size;
        this.parents = new Array(size + 1).fill(-1);
    }

    find(el) {
        let i = el;

        while(true) {
            if (this.parents[i] < 0) {
                return i;
            } else {
                i = this.parents[i];
            }
        }
    }

    getRank(parent) {
        return Math.abs(this.parents[parent]);
    }

    setParent(child, parent) {
        this.parents[child] = parent;
    }

    addNodesToUnion(parent, count) {
        this.parents[parent] = this.parents[parent] - count;
    }

    union(el1, el2) {
        const parent1 = this.find(el1);
        const parent2 = this.find(el2);

        if (parent1 === parent2) {
            // HERE IS A CYCLE
            console.log(el1, el2, 'Here is a cycle');
            return;
        }

        const parent1Rank = this.getRank(parent1);
        const parent2Rank = this.getRank(parent2);

        if (parent1Rank < parent2Rank) {
            this.setParent(parent1, parent2);
            this.addNodesToUnion(parent2, parent1Rank);
        } else {
            this.setParent(parent2, parent1);
            this.addNodesToUnion(parent1, parent2Rank);
        }

        this.size--;
    }
}

const ds = new DisjointSet(8);

ds.union(1,2);
ds.union(3,4);
ds.union(5,6);
ds.union(7,8);
ds.union(2,4);
ds.union(2,5);
ds.union(1,3);
ds.union(6,8);
ds.union(5,7);


[[1,2],[3,4],[5,6],[7,8],[2,4],[2,5],[1,3],[6,8],[5,7]]
