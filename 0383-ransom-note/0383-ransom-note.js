const canConstruct = function(ransomNote, magazine) {
    let strArr = new Array(26).fill(0);
    let base = "a".charCodeAt();
    if (magazine.length < ransomNote.length) return false;
    for (char of magazine) {
        strArr[char.charCodeAt() - base]++;
    }
   
    for(char of ransomNote) {
        const index = char.charCodeAt() - base;
        if(!strArr[index]) return false;
        strArr[index]--;
    }
    return  true;
}

module.exports = canConstruct;