export const longestWord = (sen) => {
        // Noktalama İşaretlerini kaldır //*checked
        // Cümleyi boşlukları kullanarak kelimelere ayır ve array oluştur  //*checked  
        // Arrayin içindeki kelimeleri azalan şekilde sırala 
        // 0. indexteki kelimeyi return et
        const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ") // noktalama işaretlerini replace aracılığıyla çıkartıp splitle de kelimeleri bölüyoruz.
        // beklenen çıktı "fun", "time"
        arr.sort((a, b) => {return b.length - a.length}) // en uzun kelimeyi başa lacak şekiilde sıralar
        // sort asıl arrayi bozar
        // arrayin ilk elemanını çağırırsak arr[0] task bitmiş olur. Beklenen çıktı "time"

        


    return arr[0]
}

/*
Longest
Word
- Using the JavaScript language, have the function LongestWord(sen)
take the sen parameter being passed and return the largest word in the
string .
- if there are two or more words that are the same length, return to
first word from the string with that length.

Ignore punctuation and assume sen idi 11 not be empty.
*/



