export const arrayMatching = (arr) => {
    let firstArr = JSON.parse(arr[0]); // bu şekilde yapınca string'den kurtardım belki soru başka bir şekildedir.
    let secArr = JSON.parse(arr[1]); 

    console.log(firstArr, secArr);


    let newArr = []

    let minArrLength = Math.min(firstArr.length, secArr.length)
    let maxArrLength = Math.max(firstArr.length, secArr.length)

    for(let i = 0; i < minArrLength ; i++){
        newArr.push(firstArr[i] + secArr[i])
    }
    
    if (minArrLength !== maxArrLength && firstArr.length < secArr.length) {
        let concatArr = secArr.slice(minArrLength, maxArrLength);
        newArr = newArr.concat(concatArr);
    } else {
        let spliceArr = firstArr.slice(minArrLength, maxArrLength);
        newArr = newArr.concat(spliceArr);
    }

    return newArr.join("-").toString()
}


/*
    verilen arrayin içindeki sayıları index numaralarına göre topla yeni bir array oluştur
    eğer array uzunlukları eşit değilse işleme devam et yeni arrayi oluştur ve uzun olan arraydki sayıları
    yeni arraye ekle.
    dikkat array bir stringden oluşuyor ["[3, 6, 5, 10,11,12, 10]", "[5, 20, 7, 30, 31, 25,26]"]
*/