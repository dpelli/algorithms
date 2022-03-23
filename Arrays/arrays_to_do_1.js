// // To Do 1


// // Push Front
// // Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(array, value){
    newArr = [value];
    for (var i=0; i<array.length; i++){
        newArr[i+1] = array[i];
    }
    return newArr;
}
console.log(pushFront([0, 1, 2, 3], 7));


// // Pop Front
// // Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(array){
    newArr = [];
    for (var i=array.length-1; i>0; i--){
        newArr[i-1] = array[i];
    }
    return newArr;
}
console.log(popFront([0, 1, 2, 3]));


// // Insert At
// // Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(array, index, value){
    newArr = [];
    for (var i=0; i<array.length+1; i++){
        if (i == index){
            newArr[i] = value;
        }
        if (i > index){
            newArr[i] = array[i-1];
        }
        if (i < index){
        newArr[i] = array[i];
        }
    }
    return newArr;
}
console.log(insertAt([0, 1, 2, 3], 2, 7));


// // Remove At
// // Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(array, index){
    newArr = [];
    for (var i=0; i<array.length; i++){
        if (i == index){
            value = array[i];
        }
        if (i > index){
            newArr[i-1] = array[i];
        }
        if (i < index){
        newArr[i] = array[i];
        }
    }
    console.log(newArr);
    return value;
}
console.log(removeAt([0, 1, 2, 3], 2));


// // Swap Pairs
// // Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
// // For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// // As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr){
    for (var i=0; i<arr.length; i++){
        if (i+1 < arr.length){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            i += 1;
        }
    }
    return arr;
}
console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan",true,42]));

// // Remove Duplicates
// // Sara is looking to hire an awesome web developer and has received applications from various sources. 
// // Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
// // Because array elements are already in order, all duplicate values will be grouped together. 
// // As with all these array challenges, do this without using any built-in array methods.
function removeDups(arr){
    newArr = [];
    for (var i=0; i<arr.length; i++){
        if (arr[i] == arr[i-1]){
            i = i + 1;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(removeDups([3, 4, 4, 5, 2, 3, 4, 1, 1, 9]));


// // Second: Solve this without using any nested loops.