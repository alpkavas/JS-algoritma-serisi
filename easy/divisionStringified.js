export const divisionStringified  = (n1, n2) => {
    // const division = Math.floor(n1/n2).toString() // 1.çözüm yolu regex kullanmadan 

    // if(division.length < 4) {
    //     return division
    // }

    // const diviArray = division.split("").reverse()

    // let resultArray = []
    // let j = 0
    // for(let i in diviArray){
    //     if(j != 0 && j % 3 === 0){
    //        resultArray.push(diviArray[i] + ",")
    //     }else{
    //         resultArray.push(diviArray[i])
    //     }
    //     j++
    // }

    // return resultArray.reverse().join("");

    return Math.floor(n1/n2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}


/*
    Division Stringified
Using the Javascript language,
have the function
take both parameters being passed, divide numl by num2,
and return the resul t as a string wİth properly formatted commas.
if an answer İs only 3 digits long,
return the number with no canımas (ie. 2 / 3 should output "1").
For example:
if num1 is 123456789 and num2 is 10000 the output should be "12,345".

*/