export const dashOdd = (str) =>{   
    let newArr = [];

    for(let i=0 ; i< str.length ; i++){
        if(/[^1-9]/.test(str[i])){
            newArr.push(str[i])
        }else{
            if(
                str[i] % 2 != 0 && 
                str[i + 1] % 2 != 0 && 
                str[i + 1] != undefined && // sondaki - için 
                (/[1-9]/).test(str[i + 1]) // harf için
                ){
                newArr.push(str[i] + "-")
            }else{
                newArr.push(str[i])
            }
        
        }

    }
    return newArr.join("")     

    // let strArr = str.split("") // ikinci yol

    // let totalstr = ""

    // strArr.forEach((element,index,arr) => {

    //     totalstr += element

    //     if (index + 1 == arr.length ) return totalstr // sondaki - için

    //     if ( parseInt( element) && element % 2 == 1 && arr[index+1] % 2 == 1){ // her ikiside tek ise "-"

    //         totalstr += "-"

    //     }

    // });

    // return totalstr

}

/*
    Dash insert
Using the JavaScrİpt language, have the function Dashlnsert(str) İnsert dashes
) between each two odd numbers in str. For example: if str is 454793 the (-)
output şhould be 4547-9-3. Don' t Count aş an Odd number.

*/