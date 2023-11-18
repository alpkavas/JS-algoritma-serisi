export const powerSet =  (arr) =>{
    
  const numberOfSub = 2**arr.length
  let result = [] /* Güç kümesi Power Set */

  for(let i=0; i < numberOfSub; i++){
      let tempBinary = Number(i).toString(2)
      let currentBinary = "0".repeat(arr.length - tempBinary.length) + tempBinary
      
      let tempValue = ""

      for(let j =0 ;j < arr.length; j++){
        if(currentBinary[j] === "1") tempValue += arr[j]
      }
      result.push(tempValue)
  }

  return result

}

/*
    theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

      verilen dizenin alt kümelerini yazdırıyoruz 
      [1,2,3]

*/