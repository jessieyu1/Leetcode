function findClosestElements(arr, k, x) {
 
    if (x <= arr[0]) return arr.slice(0, k);
    if (x >= arr[arr.length - 1]) return arr.slice(arr.length - k);
    let left = 0;
    let right = arr.length - k;

    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid
        }
    }
    return arr.slice(left, left + k)
}

module.exports = findClosestElements;