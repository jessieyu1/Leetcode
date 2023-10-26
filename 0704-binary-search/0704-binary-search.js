search = function(nums, target) {
    
    let start = 0;
    let end = nums.length - 1 
    
    while (start < end) {
        //prevent overflow
        let mid = Math.floor((end - start)/2 + start)
        if (nums[mid] === target) return mid
        
        if ( target > nums[mid]) {
            start = mid 
        } else {
            end = mid - 1
        }
    }
    return -1
}

module.exports = search;