export const firstReverse = (str) => {
    //split
    //reverse kullanacaz ki ters çevirsin arrayi
    // join String hale geri getiririz
//     const arr = str.split("")
//    const reverseArray = arr.reverse()
//    const newStr = reverseArray.join("") Açık bir şekilde böyle yazılır

    // const newStr = str.split("").reverse().join("") // kısa yazımı ***Bu en doğru çözüm kısa pratik.
    
    //     return newStr

      let arr = []; //hazır fonksiyonlar olmadan yazımı bu şekilde 

    let reversedWord = "";

    for(let i = 0; i < str.length; i++){

        arr[i] = str[(str.length -1 ) - i];

        reversedWord += arr[i];

    }

    return reversedWord;

}

/* 
    First Reverse
Hava the function FirstReverse() take the
str parameter being passed and return
the string in reversed .
*/