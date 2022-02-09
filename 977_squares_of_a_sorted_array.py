# Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

def sortedSquares(nums):
    squareNums = []
    for i in range(len(nums)):
        squareNum = nums[i] ** 2
        squareNums.append(squareNum)
    return sorted(squareNums)


nums1 = [-4, -1, 0, 3, 10]
nums2 = [-7, -3, 2, 3, 11]
print(sortedSquares(nums1), sortedSquares(nums2))
