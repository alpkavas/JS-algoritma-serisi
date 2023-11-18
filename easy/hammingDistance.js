export const hammingDistance  = (p1, p2) => {
    if(isNaN(p1)){ //tip kontrolü => verilen değer numbera dönüştürülebiliyorsa o zaman false verecek aksi halde true
        let p1Arr = p1.split("")
        let p2Arr = p2.split("")
        let result = countCalc(p1Arr, p2Arr)
        return result; // ilk durum için çalışır "karolin" ve "kathrin" için
    }else{
        let p1StrArr = p1.toString().split("")
        let p2StrArr = p2.toString().split("")
        let resultNum = countCalc(p1StrArr, p2StrArr)
        return resultNum; // rakam olunca çalışır 
    }

}

const countCalc = (p1Arr, p2Arr) => {
    let count = 0
    for(let i = 0 ; i < p1Arr.length ; i++){
        if(p1Arr[i] !== p2Arr[i]){
            count++
        }
    }
    return count;
}


/*
    Harming Distance is the number of different characters
İn a string or number with the same length.

11011001
10011101

You should return 2
"karolin" and "kathrin" is 3.
"karolin” and "kerstin" is 3.
"kathrin" and "kerstin" is 4.



0000 is 1111 4
.
2173896 and 2233796 is 3

*/