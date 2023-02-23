//solution 1 using splice and pop method
function duplicateZeros1(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
            arr.pop();
        }
    }
    console.log(arr);
}
//expected: [1,0,0,2,3,0,0,4]
duplicateZeros1([1, 0, 2, 3, 0, 4, 5, 0]);
//expected:[8,4,5,0,0,0,0,0]
duplicateZeros1([8, 4, 5, 0, 0, 0, 0, 7]);
//solution 2 if you can assign
function duplicateZeros2(arr) {
    var doubledArr = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            doubledArr[j] = 0;
            j += 1;
            doubledArr[j] = 0;
        }
        else {
            doubledArr[j] = arr[i];
        }
        j += 1;
    }
    arr = doubledArr.slice(0, arr.length);
    console.log(arr);
}
//expected: [1,0,0,2,3,0,0,4]
duplicateZeros2([1, 0, 2, 3, 0, 4, 5, 0]);
//expected:[8,4,5,0,0,0,0,0]
duplicateZeros2([8, 4, 5, 0, 0, 0, 0, 7]);
//solution 3 the real solution
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
    for (var readPointer = lengthIndex - writePointer; readPointer >= 0; readPointer--) {
        if (arr[readPointer] === 0) {
            arr[readPointer + writePointer] = 0;
            writePointer -= 1;
            arr[readPointer + writePointer] = 0;
        }
        else {
            arr[readPointer + writePointer] = arr[readPointer];
        }
    }
    console.log(arr);
}
//expected: [1,0,0,2,3,0,0,4]
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
//expected:[8,4,5,0,0,0,0,0]
duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]);
