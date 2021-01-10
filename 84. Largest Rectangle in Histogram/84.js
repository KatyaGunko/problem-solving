/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights, l = 0, r = heights.length - 1) {
    if (l > r) { return 0; }

    let min = l;

    for (let i = l; i <= r; i++) {
        if (heights[i] < heights[min]) {
            min = i;
        }
    }

    const leftResult = largestRectangleArea(heights, l, min - 1);
    const rightResult = largestRectangleArea(heights, min + 1, r);
    const midResult = (r - l + 1) * heights[min];

    return Math.max(leftResult, rightResult, midResult);
};
