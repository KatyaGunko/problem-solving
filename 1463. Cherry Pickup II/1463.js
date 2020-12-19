/**
 * @param {number[][]} grid
 * @return {number}
 */
let dpCache;

var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    dpCache = [];

    for (let i = 0; i < n; i++) {
        dpCache[i] = new Array(m);

        for (let j = 0; j < m; j++) {
            dpCache[i][j] = new Array(m).fill(-1);
        }
    }

    return dp(grid, 0, 0, m - 1);
};

function dp(grid, row, col1, col2) {
    if (col1 < 0 || col1 >= grid[0].length || col2 < 0 || col2 >= grid[0].length) {
        return 0;
    }

    if (dpCache[row][col1][col2] != -1) {
        return dpCache[row][col1][col2];
    }

    let result = grid[row][col1];

    if (col1 !== col2) {
        result += grid[row][col2];
    }

    if (row === grid.length - 1) {
        dpCache[row][col1][col2] = result;
        return result;
    }

    let max = 0;

    for (let i = col1 - 1; i <= col1 + 1; i++) {
        for (let j = col2 - 1; j <= col2 + 1; j++) {
            max = Math.max(max, dp(grid, row + 1, i, j));
        }
    }

    result += max;

    dpCache[row][col1][col2] = result;
    return result;
}