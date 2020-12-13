/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;

    let col = m - 1;
    let row = 0;

    while (row < n && col >= 0) {
        if (matrix[row][col] > target) {
            col--;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            return true;
        }
    }

    return false;
};