import re


def search(nums, target):
    for i in range(len(nums)):
        if target == nums[i]:
            return i
    return -1


nums = [-1, 0, 3, 5, 9, 12]
target = 9
print(search(nums, target))
