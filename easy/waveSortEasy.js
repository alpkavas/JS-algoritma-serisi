export const waveSortEasy = (arr) => {
    const sortedArr = arr.sort((a,b) => a - b)
    
    let newArr = []

    for(let i = 1; i < sortedArr.length; i+=2){
        newArr.push(sortedArr[i])
        newArr.push(sortedArr[i - 1])
    }

    if(sortedArr.length % 2 != 0){ //eğer dizinun uzunluğu çift değilse dizinin son elemanını yeni dizenin sonuna pushluyoruz
        newArr.push(sortedArr[sortedArr.length - 1])
    }

    return newArr
}


/*
    / * Have the function WaveSorting(arr)
integers stored in arr and return the can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 .....
otherwise return the string false
For example, İf art* İs: [3, 6, 5, 10, 20, 7]
possible wave ordering of the numbers [5, 3, 7, 6, 20, 10]

So for this input your program should
return the string true.

5 > 3 < 7 > 6 < 20 > 10  

-The input array Will always contain at least 2 elements.
-Arpay Will have even numbers of element
-The array contaİn unİque numbers. Big - small İs makes a wave



*/