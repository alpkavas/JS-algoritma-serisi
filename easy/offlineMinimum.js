let popArr = []  //Biraz zahmetli bir yol çıkan minimum değerleri sırasıyla döner 4, 1, 5

export const offlineMinimum = (arr) => {
    let result = resultFunc(arr)
    while(result.includes("E")){
        result = resultFunc(result)
    }   
    return popArr
}
const resultFunc = (arr) => {
let newArr = []
let indexNum = arr.indexOf("E")
    
 for(let i =0 ; i < arr.length ; i++){
        if(arr[i] === "E"){
            arr.splice(indexNum,1)
            break;
        }else{
            newArr.push(arr[i])
        }
    }
    let minValue = Math.min(...newArr)
    popArr.push(Math.min(...newArr))
    let indexMin = newArr.indexOf(minValue.toString())
    newArr.splice(indexMin,1)
    arr.splice(indexMin,1)

    return arr 
}

// export const offlineMinimum = (arr) => { //İkinci çözüm yolu E den sonrakileri çıkart E leri çıkart filtrele sortla b k sırala freq kadar splice et
//   const [index, freq] = Info(arr);
//     const numberArray = arr.splice(0, index + 1).filter( char => char != "E")

    
//   return numberArray.sort((a,b) => a - b ).splice(0,freq) // 1 4 5

// };

// function Info(arr) {
//   let index = "";
//   let freq = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "E") {
//       index = i;
//       freq++;
//     }
//   }
//   return [index, freq];
// }


/* 
    OffLİne Minimum
Using the JavaScrİpt language, have the functİon OffLİneMİnİmum(ştrArr) take the
strArr parameter beİng passed whİch be an arpay Of İntegerş rangİng
1.. .n and the letter "E" and return the correct subset based on the following
rules. The İnput be İn the followİng format: [ I , I". "
where the I's stand for integers and the E means take aut the smallest integer
currently in the whole set.
wİth İntegers separated by
When finished, your program should return that new set
For example: İf StrArr is
["5","4","6","E","1", "7", "E" , "E", "3", "2"] then your program should return 4.1,5.

*/