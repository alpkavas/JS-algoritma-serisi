export const bitWise = (arr) => {
    const first = arr[0]
    const sec = arr[1]
    let result = ""
    for(let i = 0 ; i < arr[0].length; i++){
        if(first.charAt(i) === "1" || sec.charAt(i) === "1"){
            result += "1"
        }else{
            result += "0"
        }
    }
    return result
}

/*
    For this challenge you Will perform a bitwise operation on two binary numbers.
have the function BitwiseTwo(strArr) take the array of strings stored in strArr,
WhİCh Will only contain tWO strİngs Of equal length that represent binary numbers.
and return a final binary string that performed the bitwise AND operation on both
strings.
A bitwise OR operation places a 1 in the neva string
where there İs a I in one locatİons İn the binary strings,
ctherwise it places a e in that spot.
For example: strArr ["1100", "0111"] then your program Should return string "1111"

*/