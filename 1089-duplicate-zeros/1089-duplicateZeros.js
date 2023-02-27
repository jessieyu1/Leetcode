function duplicateZeros(arr) {
  var writePointer = 0;
  var lengthIndex = arr.length - 1;
  //counting zeros
  for (var i = 0; i <= lengthIndex - writePointer; i++) {
    if (arr[i] === 0) {
      //edge case: the leftover zero can't be duplicated, no space
      if (i === lengthIndex - writePointer) {
        arr[lengthIndex] = 0;
        lengthIndex -= 1;
        break;
      }
      writePointer++;
    }
  }
  for (
    var readPointer = lengthIndex - writePointer;
    readPointer >= 0;
    readPointer--
  ) {
    if (arr[readPointer] === 0) {
      arr[readPointer + writePointer] = 0;
      writePointer -= 1;
      arr[readPointer + writePointer] = 0;
    } else {
      arr[readPointer + writePointer] = arr[readPointer];
    }
  }
}
module.exports = duplicateZeros;
