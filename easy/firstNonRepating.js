export const firstNonRepating = (str) => {
     const charCount = {}; //Büyük küçük harf dikkate almadık hepsini küçük harf yaptık

  // Karakterleri sayma işlemi yapıyor hangi karakterden kaç tane var?
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1; // a:2 e:2 l:1 n:1 p:1 r:1
    }
    // Tekrar etmeyen ilk karakteri bulma => aslında değeri 1 olan ilk karakteri dönüyor.
    console.log(charCount);
    for (let j = 0; j < str.length; j++) {
        var char = str[j].toLowerCase();
        if (charCount[char] === 1) {
        return char;
        }
    }

  return null; // Tekrar etmeyen karakter bulunamazsa null döndürülür

}

/*
    Write a function named first_non repeating_letter
that takes a string input, and returns the first character
that İs not repeated anywhere İn the string.
For example, if given the input 'stress' ,
the function should return since the letter t only occurs
once İn the string, and occurs first İn the string.
As an added challenge, upper- and Iowercase letters are considered
the same character, but the function should return the correct
case for the initial letter. For example,
the İnput 'sTreSS' should return 'T' .
if a string contains all repeating characters,
İt Should return an empty strİng ("") Nane
see sample tests.

tekrar etmeyen ilk char'ı dön


*/