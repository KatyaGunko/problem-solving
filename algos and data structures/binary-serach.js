let searchIterative = function(nums, target) {
    const n = nums.length;
    let l = 0, r = n - 1;

    while(l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return -1;
};

let searchRecursive = function(nums, target, l = 0, r = nums.length - 1) {
    if (l > r) { return -1; }

    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return search(nums, target, l, mid - 1);
    } else {
        return search(nums, target, mid + 1, r);
    }
}

