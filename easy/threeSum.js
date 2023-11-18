// export const threeSum = (arr, target) => { //ikinci de patladı 0 lıda Doğru Çözüm ¦↓↓↓¦
//     let resultArr = []
//         arr.sort((a,b)=> a - b)
//         for(let i = 0; i < arr.length; i++){
//          const pushArr = sum(arr[i], arr, target)
//          if(pushArr.length !== 0){
//              resultArr.push(pushArr);
//         }
//     }
//     return resultArr
// }


// const sum =(num,arr,target) => {
//     let pushArr = []
//     for(let i = 0; i < arr.length ; i++){
//         if(target === (num) + arr[i + 1] + (arr[i + 2])){
//             console.log(num , arr[i + 1] , arr[i + 2]);
//             pushArr.push(num,arr[i+1], arr[i+2])
//             break
//         }
//     }
//     return pushArr
// }


export const threeSum = (arr,target) => { // ideal çözüm bütün çıktıları doğru veriyor
    arr.sort((a,b)=> a - b)
    let newArr = []

    for(let i =0 ; i < arr.length - 2 ; i++){
        if(arr[i] !== arr[i-1]){
            let left = i+ 1
            let rigth = arr.length - 1

            while(left < rigth){
                let currentSum = arr[i] + arr[left] + arr[rigth]
                if(currentSum > target){
                    rigth--
                }else if(currentSum < target){
                    left++
                }else if(currentSum === target){
                    newArr.push([arr[i], arr[left], arr[rigth]])
                    while(arr[left] === arr[left + 1]) return left++
                    while(arr[rigth] === arr[rigth - 1]) return rigth--
                    left++
                    rigth--
                }
            }
        }        
    }
    return newArr
}


/* 
üç değer kullanarak hedef sayıya ulaş arrrayin içinde -1 0 da olabilir
Tüm doğru değerler dönmeli
[8,2,1,4,10,5,-1,-1] target:8 ilk aray bu ve çıktı [2,5,1] [5,4,-1] [10,-1, -1]
[-1,0,1,2,-1,4]

https://dev.to/urfan/leetcode-3sum-with-javascript-4b8j // daha fazlası için buraya bakabilirsin
*/