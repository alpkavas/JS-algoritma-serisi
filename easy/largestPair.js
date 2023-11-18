export const largestPair = (num) => {
    let numArr = num.toString().split("")
    console.log(numArr);
    if(numArr.length === 1){
        return console.log('sayı iki basamaklı değil');
    }
    
    
    let pushArr = [] //oluşabilecek bütün kombinasyonlar var
    for(let i =0 ; i < numArr.length; i++){
        for(let j =0 ; j < numArr.length - 1 ; j++){
            pushArr.push(numArr[i] + numArr[j + 1])
            pushArr.push(numArr[j +1] + numArr[i])
            i++
        }
    }
    console.log(pushArr); // ['47', '74', '75', '57', '59', '95', '94', '49', '47', '74', '72', '27']
    
    
    let doubleArr = [] //çift sayıları buraya attık
    pushArr.map((num) => {
        if(num % 2 === 0) doubleArr.push(+num)
    })
    console.log(doubleArr); //[74, 94, 74, 72] number olarak diziye attık

    if(!doubleArr.length > 0){
        return console.log('dizi tek sayılardan oluşuyor');
    }

    return Math.max(...doubleArr)
}

/* 
    have the function LargestPair(num) take the num parameter
being passed and determine the largest double digit number
wİthİn the whole number. For example: İf num İs 4759472 then
your program should return 94 because that İs the largest double
digit number. The input Will always contain at least
two posİtİve digits.

sayıyı oluşturan rakamların hepsinin tek olması?
0' ın çift sayılıp sayılmaması ve pozitif olma durumu?

*/ 