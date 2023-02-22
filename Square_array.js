/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 * @param nums Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 *
 */
//Solution 1: use sort method
function sortedSquares(nums) {
    var newNums = [];
    for (var i = 0; i < nums.length; i++) {
        newNums.push(nums[i] * nums[i]);
    }
    newNums.sort(function (a, b) { return a - b; });
    return newNums;
}
//expected result: [ 0, 1, 9, 16, 100 ]
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// solution 2 two pointer
function sortedSquares2(nums) {
    var left = 0;
    var right = nums.length - 1;
    var newNum = [];
    for (var i = nums.length - 1; i >= 0; i--) {
        var square = void 0;
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            square = Math.abs(nums[right]);
            right--;
        }
        else {
            square = Math.abs(nums[left]);
            left++;
        }
        newNum[i] = square * square;
    }
    return newNum;
}
//expected result: [ 0, 1, 9, 16, 100 ]
console.log(sortedSquares2([-4, -1, 0, 3, 10]));
