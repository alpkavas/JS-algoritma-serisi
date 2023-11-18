export const simpleSymbol = (str) => {
    const arr = str.split('')
    let control = []

    arr.forEach(letter => {
        if((/[a-zA-Z]/).test(letter)){
            if((arr[arr.indexOf(letter) - 1] && arr[arr.indexOf(letter) + 1]) === "+" ) { // buranın açıklaması aşşağıda ↓↓
                control.push(1)
            }else {
                control.push(0)
            }
        }
    });
    console.log(control); // 0 old. için false dönecektir.

    if(control.includes(0)){
        return false
    }else {
        return true
    }

}



/*
    →→→ bir önceki ve sonraki elemanın "+" olup olmadığını kontrol ediyoruz. Eğer her ikisi de "+" ise o zaman control adlı diziye 1 pushlanır.
    →→→ Eğer dizinin içinde 0 varsa false döner yoksa true döner 

*/

/*
    Simple Symbols
Using the JavaScript language, have the function SimpleSymboIs(str) take the
str parameter being passed and determine if it is an acceptable sequence
by either returning the string true or false.

The str parameter Will be composed of + and symbols wİth several letters
between them (ie. ++d+zzz+c++z—a) and for the strirg to be true each letter
must be surrounded by a + symbol.

So the string to the left would be false.

The string Will not be empty and Will hava at least one letter.

*/