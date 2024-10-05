function numOfSubarrays (arr, k, threshold) {
    let max =  threshold * k;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    if (sum >= max) {
        count++;
    };
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        if (sum >= max) {
            count++;
        };
    }
    return count;
}

module.exports = numOfSubarrays;