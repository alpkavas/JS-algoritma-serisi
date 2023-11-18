export const palindromeTwo = (str) => {
    const newStr = str.toLowerCase().replace(/[^a-zA-Z]/g, "").toLowerCase().split("").join("")
    const reverseStr = str.toLowerCase().replace(/[^a-zA-Z]/g, "").toLowerCase().split("").reverse().join("")
    console.log(newStr); //anneivotemorecarsracerometovienna
    console.log(reverseStr); //anneivotemorecarsracerometovienna
    return newStr === reverseStr ? true : false
}



/* 
    Using the Javascript language, have the function PalindromeTwo(str)
take the str parameter beİng passed and return the strİng true
if the parameter is a palindrome, (the string is the same forward as it is backward)
otherwise return the string false.
The parameter entered
whether the string İs
For example: "Anne, I vote more cars race Rome-to-Vİenna” 
may have punctuation and symbols but they should not affect
İn fact a pal İndrome.
should return true.

"Anne, I vote more cars race Rome-to-Vİenna" baştan ve sondan aynı şekilde okunuyorsa true 
değilse false döneccek

*/