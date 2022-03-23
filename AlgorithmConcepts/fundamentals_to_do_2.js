// Countdown
// function countdown(num){
//     var arr = []
//     for (var i = num; i >= 0; i--){
//         arr.push(num)
//     }
//     return arr.length
// }

// console.log(countdown(5))


// Print and Return
// function print_and_return(arr){
//     console.log(arr[0])
//     return arr[1]
// }

// console.log(print_and_return([5, 9]))


// First Plus Length
// function first_plus_length(arr){
//     if (typeof arr[0] == "number"){
//         return arr[0] + arr.length
//     }
//     else{
//         return "first value not a number"
//     }
// }
// console.log(first_plus_length(["babe", 2]))
// console.log(first_plus_length([3, 2, 7]))


// Values Greater than Second
// function greater_than_second(arr){
//     var count = 0;
//     var min = arr[1];
//     if (arr.length == 1){
//         console.log("Not enough values")
//     }
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > min){
//             console.log(arr[i]);
//             count += 1;
//         } else{
//             continue
//         }
//     }
//     return count;
// }

// console.log(greater_than_second([1, 3, 5, 7, 9, 13]))
// console.log(greater_than_second([1]))


// This Length, That Value
// function length_value(num1, num2){
//     var arr = [];
//     for (var i = 1; i <= num1; i++){
//         if (num1 == num2){
//             console.log("Jinx")
//         } 
//         else{
//             arr.push(2);
//         }
//     }
//     console.log(arr.length);
//     return arr;
// }

// console.log(length_value(5, 1))


// Fit the First Value
// function first_first_val(arr){
//     if (arr[0] > arr.length){
//         console.log("Too big!")
//     } else if (arr[0] < arr.length){
//         console.log("Too small!")
//     } else{
//         console.log("Just right!")
//     }
// }

// first_first_val([4, 2])
// first_first_val([1, 6, 7])
// first_first_val([2, 2])


// Fahrenheit to Celsius
// function fahrenheitToCelsius(fDegrees){
//     var cDegrees = ((fDegrees - 32)*5)/9
//     return cDegrees
// }
// console.log(fahrenheitToCelsius(32))

// Celsius to Fahrenheit
// function fahrenheitToCelsius(cDegrees){
//     var fDegrees = (cDegrees * (9/5))+32
//     for (var c = 200; c > -200; c--){
//         var f = (c * (9/5))+32
//         if (f == c){
//             console.log(`They are equal at ${c}`)
//         }
//     }
//     return fDegrees
// }
// console.log(fahrenheitToCelsius(32))