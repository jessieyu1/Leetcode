function gcdOfStrings(str1, str2){
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const greatestCommonDivisor = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };
    
    const gcdLength = greatestCommonDivisor(str1.length, str2.length);
    
    return str1.slice(0, gcdLength);
}

module.exports = gcdOfStrings;