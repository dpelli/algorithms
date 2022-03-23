// Min to Front
// Given an array of comparable values, move the lowest element to arrayâ€™s front, 
// shifting backward any elements previously ahead of it. Do not otherwise change the arrayâ€™s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    min = arr[0];
    spot = 0;
    for (var i=1; i<arr.length; i++){
        if (arr[i]<min){
            min = arr[i];
            spot = i;
        }
    }
    for (var j=spot; j>0; j--){
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
    }
    return arr;
}
console.log(minToFront([4,2,1,3,5]));