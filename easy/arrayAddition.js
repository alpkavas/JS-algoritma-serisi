export const arrayAddition = (arr) => {
    let maxValue = arr.sort((a,b) => a - b).pop()
    let total = 0
    console.log(arr);
    for(let i = 0 ; i < arr.length ; i++){
        total += arr[i]
    }
   return maxValue === total ? true : false
        
}

/*
    Array Addİtİon I
Using the JavaScript language, have the function
ArrayAddİtİonI( arr) take the array Of numberşs stored in
arr and return the string true any combination of
numbers İn the array can be added up to equal
the largeşt number İn the array. otherwİse return the strİng false.
For example: if arr contains [4, 6, 23, 10, 1, 3] the output should
return false because 4 + 6 + 10 + 3 + 1 !=23(24).
The arpay Will not be erpty, not contain
ali the sane elements, and may contain negative numbers.

    Dizideki en büyük değeri diziden çıkart geriye kalan sayıları topla en büyük değere eşitse true değilse false dönsün.
*/