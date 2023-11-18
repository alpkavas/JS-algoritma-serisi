export const isPalindrome = (str) => {
//     const arr = str.split("").join("") ===>  kontroller yok bu test "str" için uygun kontrollü hali ↓
//     const reverseArr = str.split("").reverse().join("")
//     // if(arr === reverseArr){
//     //     return true
//     // }else{
//     //     return false
//     // }

//    return arr === reverseArr ? true : false

    const arr = str.replace(/ /g, "").toLowerCase() // boşlukları sildik ve basit bir çözüm oldu.
    return arr.split("").reverse().join("") === arr ? true : false
}

/*
    Palindrome kelime demek baştanda okunsa sondan da okunsa aynı anlama gelen 
    kelimelerdir. Örnekte "racecar" sözcüğü verilmiş. eğer verilen sözcük Palindromesa true
    değilse false dönmesi isteniyor.

*/