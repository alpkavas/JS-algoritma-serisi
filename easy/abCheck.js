export const abCheck = (str) => {
    const arr = str.toLowerCase().split("")
    let control = []
    
    // if(!arr.includes("a")){ // return de her durumu kontro etmiş olduk 
    //     control.push(false)
    // }

    arr.forEach(letter => {
        if(letter === "a" && arr[arr.indexOf(letter) + 4] === "b"){
            control.push(true)
        }
   });
    return control.includes(true) ? true : false
}

/*
    AB Check
    Using the JavaScript language, have the function ABCheck(str)
take the str parameter being passed and return the string true
if the characters a and b are separated by exactly 3 places
anywhere in the string at least once

(ie. "iane borrowed" would resul t in true because there is
exactly three characters between a and b).
Otherwise return the string false.


 Beklenen çıktı eğer koşullar doğruysa true yanlışsa false.
*/