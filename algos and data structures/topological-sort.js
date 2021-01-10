// g is a Graph represented as an adjacency list
function topologicalSort(g) {
    const visited = new Set();
    const sorted = [];
    const recursionStack = new Set();

    for (let key of g.keys()) {
        if (!visited.has(key)) {
            try {
                dfs(key, g, visited, sorted, recursionStack);
            } catch (e) {
                console.error(e);
                return [];
            }
        }
    }

    console.log(sorted);
    return sorted;
}

function dfs(vIndex, g, visited, sorted, recursionStack) {
    visited.add(vIndex);
    recursionStack.add(vIndex);

    const neighbors = g.get(vIndex) || [];

    for (let i = 0; i < neighbors.length; i++) {
        if (recursionStack.has(neighbors[i])) {
            throw new Error('There is a cycle in a graph.');
        }

        if (!visited.has(neighbors[i])) {
            dfs(neighbors[i], g, visited, sorted,recursionStack);
        }
    }

    recursionStack.delete(vIndex);
    sorted.unshift(vIndex);
}

const graphWithCycle = new Map([
    ['a',['b','d']],
    ['c',['f']],
    ['b',['e']],
    ['d',['e','f']],
    ['f',['g','i']],
    ['e',['h']],
    ['g',['e','j','i']],
    ['i',['k']],
    ['j',['g']]
]);

const graphWithoutCycle = new Map([
    ['a',['b','d']],
    ['c',['f']],
    ['b',['e']],
    ['d',['e','f']],
    ['f',['g','i']],
    ['e',['h','g']],
    ['h',['j']],
    ['g',['j','i']],
    ['i',['k']],
]);

topologicalSort(graphWithCycle);
topologicalSort(graphWithoutCycle);

