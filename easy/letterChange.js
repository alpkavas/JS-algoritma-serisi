export const letterChange = (str) => {
    let newStr = str.toLowerCase().replace(/[a-zçıöşü]/gi, (char) => {
    if (char === "z") {
        return "a";
    } else {
        return String.fromCharCode(char.charCodeAt() + 1);
    }
});
    let capitalLetter = newStr.replace(/[a|e|i|ü|ö|o|u|o|]/gi, char => char.toUpperCase())

    return capitalLetter
};


/*
    Using the JavaScript, have the function LetteNhanges(str) take
the str parameter being passed and mdify it using the following
algorithm.
İt

1)Replace every letter in the string "ith the letter folIowing
İn the alphabet (ie. c d, z becmes a).
2) Then capitalize every vowel in this ne" string (a, e, i, o.
and finaliy r•eturn this modified string.
*/