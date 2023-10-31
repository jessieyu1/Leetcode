function isBadVersion(version, badVersion) {
    return version >= badVersion;
}

function findBadVersion(n, badVersion) {
    let left = 0
    let right = n
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(
            isBadVersion(mid, badVersion) && !isBadVersion(mid -1, badVersion)
        ) return mid;
        if ( isBadVersion(mid, badVersion) && isBadVersion(mid -1, badVersion))
        {
            right = mid
        } else 
        left = mid + 1
    }
    return left
}

module.exports = findBadVersion