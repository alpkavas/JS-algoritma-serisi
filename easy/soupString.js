export const soupString = (str) => {
    const arr = str.toLowerCase().split("")

    let newWord = arr.map(letter => {
        if(letter === arr[0]){
            let shiftedLetter = arr.splice(0,1)
            let shiftedSecoundLetter = arr.splice(0,1)
            // console.log(shiftedLetter);
            // console.log(shiftedSecoundLetter);
            
             return shiftedSecoundLetter + shiftedLetter + arr.join("")
            
        }
    });

    console.log(newWord[0]);

}


/* 
    Yapılmak istenen verilen stringin 1. ve 2. harflerinin yer değiştirilerek yazılması 
    hello => ehllo 
    merhaba => emrhaba şeklinde muhtemel çıktısı olacak.

*/