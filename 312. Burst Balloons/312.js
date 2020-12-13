/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const n = nums.length + 2;
    const memo = new Array(n);

    for (let i = 0; i < n; i++) memo[i] = [];

    nums.push(1);
    nums.unshift(1);

    return dp(memo, nums, 0, n - 1);
};

function dp(memo, nums, left, right) {
    if (left + 1 === right) return 0;

    if (memo[left][right] > 0) { return memo[left][right]; }

    let ans = 0;

    for (let i = left + 1; i < right; i++) {
        ans = Math.max(ans, nums[left] * nums[i] * nums[right] + dp(memo, nums, left, i) + dp(memo, nums, i, right));
    }

    memo[left][right] = ans;
    return ans;
}