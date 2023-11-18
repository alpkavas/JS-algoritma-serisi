export const meanMode = (arr) => {
        let mean = findMean(arr);
        let mod = findMod(arr)

        return mod === mean ? 1 : 0

}
    
    const findMean = (arr) => { // ortalama bulan fonksiyon
        let length = arr.length
        let total = 0
        for(let i in arr){
            total += arr[i]
        }
        return total/length
        }
    
    const findMod = (arr) => { // mod bulan fonksiyon
        let freq = {}
        for(let j in arr){
            if(arr[j] in freq){
            freq[arr[j]] = freq[arr[j]] + 1
            }else{
            freq[arr[j]] = 1
            }
        }
        const maxValue = Math.max(...Object.values(freq))
        return equalMaxFreq(maxValue,freq)  
    }

    const equalMaxFreq= (max, freq) => {
        for(let i in freq){
            if(freq[i] === max){
                return parseInt(i) // stiring döneceğinden parse ettik
            }
        }
        
    }
/*
    MearMde
Have the function take the array Of nu*erş Stored İn and
return I iç the Mde equals the mean. İf they don't equal each other
(ie. [5, 3, 3, 3, 1] should return I because the mde (3) equals the nean (3)).
The array not be empty, will only contain positive integers, and not
contaln nore than one mode.


mode is the nu—ber which repeated most in the arr

bir arrayin ortalaması moduna eşitse 1 dönsün değilse 0; 

*/