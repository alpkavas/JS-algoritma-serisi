export const pascal = (num) => {
if(num === 0 ) [0]
if(num === 1) [[1]]
let result = [[1]]
for(let i = 0; i < num ; i++){
    let temp = [0,...result[result.length - 1],0]
    
    let row = []
    for(let j =0 ; j < result[result.length -1].length + 1 ; j++){
        row.push(temp[j] + temp[j +1])
    }
    result.push(row)
}
return result

}


/* 
    Verilen sayıya göre pascal üçgeninini n. satırının döndürülmesi
   1 
 1   1
1  2  1  n=3 3.satır bu bu dönecek


daha fazlası için buray bak https://dev.to/alisabaj/solving-pascal-s-triangle-in-javascript-4e59
*/