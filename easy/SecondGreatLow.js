export const secondGreatLow = (arr) => {
    // let min = [] ====> Dizide 3 eleman aynıysa patlıyor [7,7,7,12,98,106] için bu sebepten ilk önce arrayden aynı olan sayıları çıkarmalıyız.↓↓↓ Çözüm Aşşağıda 
    // let max = []
    // console.log(arr.sort((a,b) => a - b).reverse());


    // for(let i = 0; i < arr.length ; i++){
    //     if(arr.sort((a,b) => a - b)[i] === arr.sort((a,b) => a - b)[i + 1]){
    //         min.push( arr.sort((a,b) => a - b)[i + 2])
    //     }else{
    //          min.push( arr.sort((a,b) => a - b)[i + 1])
    //     }
    //     if(arr.sort((a,b) => a - b).reverse()[i] === arr.sort((a,b) => a - b).reverse()[i + 1]){
    //         max.push(arr.sort((a,b) => a - b).reverse()[i + 2])
    //     }else {
    //          max.push(arr.sort((a,b) => a - b).reverse()[i + 1])
    //     }
        
    // }
    // let result = min[0] + "-" + max[0]
    

    // return result

    const newArr = []; //Çözüm burada
    arr.forEach(num => {
        !newArr.includes(num) && newArr.push(num)
    });

    console.log(newArr); //[7,12,98,106]
    newArr.sort((a,b) => a - b) // küçükten büyüğe sıraladık

    if(newArr.length === 2){
        return newArr[1] + "-" + newArr[0] 
    }else{
        return newArr[1] + "-" + newArr[newArr.length - 2] // en büyük ikinci elamanı bulmak için length - 2
        
    }

} 

/*
    Second Great Low
Using the JavaScrİpt language, have the function SecondGreatLow(arr)
take the array of numbers stored in arp and return the second Iowest
and second greatest numbers, respectively, separated by a space.
For example: if arp contains [7, 7, 12, 98, 106]
the output should be 12 98.

The array Will not be empty and Will contaİn at least 2 numbers.

it can get tricky İf there's just two numbers!

*/