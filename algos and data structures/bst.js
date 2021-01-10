/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, l = 0, r = nums.length - 1) {
    if (l > r) { return null; }

    const mid = l + Math.floor((r - l) / 2);

    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums, l, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, r);

    return root;
};