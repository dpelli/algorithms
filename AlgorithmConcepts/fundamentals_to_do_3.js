// Biggie Size
// function biggie_size(arr){
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > 0){
//             arr[i] = "big";
//         }
//     }
//     return arr;
// }
// console.log(biggie_size([-1, 3, 5, -5]))

// Print Low, Return High
// function low_high(arr){
//     var min = 0;
//     var max = 0;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] < min){
//             min = arr[i];
//         }
//         else if (arr[i] > max){
//             max = arr[i];
//         }
//         else{
//             continue
//         }
//     }
//     console.log(min);
//     return max;
// }
// console.log(low_high([0, 7, 3, 6, 10]))

// Print One, Return Another
// function one_another(arr){
//     var second_to_last = arr[arr.length - 1];
//     console.log(second_to_last);
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] % 2 != 0){
//             return arr[i];
//         }
//     }
// }
// console.log(one_another([4, 2, 3, 6, 1, 0]))

// Double Vision
// function double_vision(arr){
//     for (var i = 0; i < arr.length; i++){
//         arr[i] *= 2;
//     }
//     return arr;
// }
// console.log(double_vision([1, 2, 3]));

// Count Positives
// function count_positives(arr){
//     var count = 0;
//     for (var i = 0; i < arr.length; i++){
//         count += 1;
//         if (i == arr.length - 1){
//             arr.pop();
//             arr.push(count);
//             return arr;
//         }
//     }
// }
// console.log(count_positives([-1, 1, 1, 1]))

// Evens and Odds
function evens_odds(arr){
    var odd_count = 0;
    var even_count = 0;
    for (var i = 0; i < arr.legnth; i++){
        if (odd_count == 2 && arr[i] % 2 != 0){
            console.log("That's odd!")
            odd_count = 0;
        }
        else if (even_count == 2 && arr[i] % 2 == 0){
            console.log("Even more so!")
            even_count +=1;
        }
        else if (arr[i] % 2 == 0){
            even_count +=1;
        }
        else{
            odd_count += 1;
        }
    }
}
evens_odds([0])