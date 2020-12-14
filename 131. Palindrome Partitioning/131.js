/**
 * @param {string} s
 * @return {string[][]}
 */

let partition = function(s) {
    const result = [];

    tryToPartition(s, 0, s.length, [], result);

    return result;
};

// try to split string on every index
// check if prefix is a palindrome call recursion function on suffix;
function tryToPartition(s, start, end, acc, result) {
    if (start === end) {
        result.push(acc);
        return;
    }

    for (let i = start + 1; i <= end + 1; i++) {
        const prefix = s.substring(start, i);

        // console.log(prefix, suffix);
        if (isPalindrome(prefix)) {
            tryToPartition(s, i, end, [...acc, prefix], result);
        }
    }
}

function isPalindrome(s) {
    const reversed = s.split("").reverse().join("");

    return s === reversed;
}