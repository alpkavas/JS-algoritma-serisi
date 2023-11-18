export const numberAddition = (str) => {
    const arr = str.split("")

    let numberArr= []

    for(let i = 0 ; i < arr.length ; i++ ){
        if((/[^0-9]/).test(arr[i])){
            numberArr.push(arr[i])            
        }else{
            if(numberArr.length === 0){
                numberArr.push(arr[i])   
            }else if((/[0-9]/).test(numberArr[numberArr.length - 1])){
                numberArr[numberArr.length - 1] = numberArr[numberArr.length - 1] + arr[i]
            }else if((/[^0-9]/).test(numberArr[numberArr - 1])){
                numberArr.push(arr[i])
            }
        }
    }
    
    return resultTotal(numberArr)
    }

    const resultTotal = (arr) =>{
        let sum = 0

        for(let i = 0 ; i < arr.length; i++){
            if(arr[i].match(/\d+/)){
                sum += parseInt(arr[i])
            }
        }
        return sum
    }




/*
    Number Addition
Using the JavaScript language, have the function NumberSearch(str)
take the str parameter, search for all the numbers İn the string,
add them together. then return that final number.
For example: if Str is "88Hello 3World!" the output should be 91.
8+8+3= 19
88+3 =91
You Will have to differentiate between single digİt numbers and
multiple digit numbers like in the example above.
"55Hello" = 55
and
"5Hello5" = 10
should return two different answers.
Each string Will contain at least one letter or symbol.

*/