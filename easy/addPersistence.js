export const addPersistence = (num) => {
    if(num < 10) return 0

    let sumOfDigits = sum(num)
    let count = 1;

    while(sumOfDigits >= 10 ){
        count++
        sumOfDigits = sum(sumOfDigits)
    }

    return "toplam değeri =>" + sumOfDigits + " dönmesi beklenen değer =>" +`${count}`
};

const sum = (number) => {
    let sum = 0
    const arr = number.toString().split("");
    
    for(let i = 0; i <  arr.length ; i++){
        sum += parseInt(arr[i])
        
    }

    return sum
}


/*
    Addİtİve Persistence
Using the JavaScript language. have the function AdditivePersistence(num)
take the num parameter being passed which Will always be a positive integer
and return its additive persistence which is the number of times you must
add the digits in num until you reach a single digit.
For example:
if num is 2718 then your program should return 2
because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
        count 1                 count 2         return 2
*/