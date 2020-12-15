/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);

    let pointer = n - 1;

    let l = 0, r = n - 1;

    while (l <= r) {
        const pow1 = nums[l] * nums[l];
        const pow2 = nums[r] * nums[r];

        if (pow1 > pow2) {
            result[pointer] = pow1;
            pointer--;
            l++;
        } else {
            result[pointer] = pow2;
            pointer--;
            r--;
        }
    }

    return result;
};