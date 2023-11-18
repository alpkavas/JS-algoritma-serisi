export const effectiveWayTwoSum = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i]
        let difValue = target - currentNum

        const indexOfSecValue = arr.indexOf(difValue)

        if(indexOfSecValue > -1 && arr[i] != arr[indexOfSecValue]){
            return [i, indexOfSecValue]
        }
    
    }


}




// 2 7 8 10 değeri ve target 9 var bize dönüt [0,1] olarak olmalı 
// Bu soruyu daha önce de çözmüştüm ama bu daha verimli bir yolu 
// targettan ilk değeri çıkarttıp arrayin içinde değeri(7)'i arıyoruz