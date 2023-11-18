export const xoIsEqual = (str) => {
    // let xCount = 0 ==========> Daha kısa bir yol için ↓
    // let oCount = 0
    // const arr = str.split("")

    // arr.map((char) => {
    //     if(char === "x"){
    //         xCount++
    //     }else if(char === "o"){
    //         oCount++
    //     }
    // });
    // return xCount === oCount ? true : false;

    let x = 0; // Yukarda yazılınanın daha kısa versiyonu.
    let y = 0;

    [...str].forEach((char) => {
        char === x ? x++ : y++
    })
    return x === y ? true : false;
}


/* 
    Ex Oh
Using the JavaScript language, have the function
ExOh(str) take the str parameter being passed and
return the string true if there is an equal number
of x' s and o 's, otherwise return the string false.
Only these two letters Will be entered in the
string, no punctuation or numbers.
For example: if str is "xooxxxxooxo” then the
output should return false because there are 6 x' s and 5 o' s.

beklenen değer False

*/
