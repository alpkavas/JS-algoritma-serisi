export const soupStringWithSort = (str) => {
        // ===================> Birinci Yol

        // const arr = str.split("") 
        // const alphabetcalArr = arr.sort()
        // const newStr = alphabetcalArr.join("")
        // console.log(newStr);

        //=========================> İkinci Yol

        const arr = str.toLowerCase().replace(/[^a-zA-Z]/g, "") // Bu regex kontrol rakam ve semboller için. Gerisi aynı
        const newArr = arr.split("").sort().join("")
        return newArr
}


/* 
    Alphabet Soup
Rave the function AlphabetSoup(str) take the str string parameter
being passed and return the string with the letters in
alphabetcal order (ie. hello becomes ehllo).


numbere, and punctuation symbol. Will not be
included in the string. => istersek regexle bu durumu kontrol edebiliriz. İkinci yol olarak bu şekilde
yapacağım. 

Birinci yol için test stringi "merhaba"

ikinci yol için test stringi "!12*M^erh*!!aba*"


*/