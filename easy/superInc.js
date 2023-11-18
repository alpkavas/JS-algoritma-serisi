export const superInc = (arr) => {
    for(let i = 1; i < arr.length ; i++){
        let sum = sumOfSub(arr, i)
        console.log(arr[i] + "---" + sum);
        if(sum >= arr[i]) return false
    }
    return true
}

const sumOfSub = (arr, i) =>{
    let summary = 0
    for(let j = 0; j < i ; j++){
        summary += arr[j]
    }
    return summary
}



/* 
    For this challenge you Will determine if each number is greater than
the sum Of previous elements İn an array.

have the function Superincreasing(arr) take the array of numbers stored in arp
and determine İf the arpay forms a super-increasing sequence
where each element in the array is greater than the sum of all previous elements.
The array only consist of positive integers.
For example: if arr is [1, 3, 6, 13, 54] then your program should return
the strİng "true” because İt forms a superİncreasİng sequence.
if a superincreasing sequence isn't formed. then your program
Should the Strİng "false"

[1, 3, 6, 13, 54] 1 + 3 > 6 hayır o zaman true 1 + 3 + 6 >13 koşul hala sağlanıyor 
koşul bu şekilde sağlanırsa true : false dönecek
    [1, 2, 4, 9, 18, 62 ] => true döner

    [1, 2, 4, 9, 15, 62] => false döner "16 --- 15" sebebiyle

*/