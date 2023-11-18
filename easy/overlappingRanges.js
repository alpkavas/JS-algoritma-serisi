export const overlapRanges = (arr) => { 
    let a = arr[0]
    let b = arr[1]
    let c = arr[2]
    let d = arr[3]

    const firstArr = setArray(a, b)
    const secArr = setArray(c, d)

    let commonLength = findCharacter(firstArr, secArr).length // ortak sayıların length'ni eşitledim

    return commonLength >= arr[arr.length - 1] ? true : false // uzunluk >= true : false döncek şekilde ayarlandı.
    
}
const setArray = (a , b) => { //firstArr ve secArr'in içini dolduruyor
    let pushChar = []
    for(let i = a ; i <= b ; i++){
         pushChar.push(i)
    }
    return pushChar
}

const findCharacter = (firstArr, secArr) => { // iki arraydeki ortak sayıları return ediyor
 let commonChar = [];

 for (let i = 0; i < firstArr.length ; i++) {
   let char = firstArr[i];

   if (secArr.indexOf(char) !== -1) {
     commonChar.push(char);
   }
 }
 return commonChar;
}


/* 
    For thİs practİce test you Will determine the İntersection between two sets.
have the function OverIappingRanges(arr) take the array of numbers stored in art*
which Will contain 5 positive integers, the first two representing a range of
numbers (a to b), the next 2 also representing another range of integers (c to d),
and a final 5th element (x) which Will also be a positive integer, and return the
strİng true İf both şets Of ranges overlap by at least x numbers.
For example: İf arr is [4, 10, 2, 6, 3] then your program should return the strİng
true.
The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of
numbers are 2. 3. 4, 5. 6.
The last element in the array is "3", and there are "3" numbers that overlap between
both ranges: 4, 5, and 6.
İf both ranges do not overlap by at least x numbers, then your program should
return the string false.

Verilen arrayden ilk iki ögesi ve sonraki iki ögesi bir diziyi ifade ediyor.

4 10 => 4 5 6 7 8 9 10
2 6 => 2 3 4 5 6

ve bunların kesşimi al 4 5 6 kaç sayı var 3 dizinin son elamnıyla 3 karşılaştır  
eğer aynıysa veya ondan büyükse true : false





*/