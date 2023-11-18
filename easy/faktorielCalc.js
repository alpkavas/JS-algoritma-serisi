export const factorielCalc = (num) => {
    let toplam = 1 

    for(let i = 2 ; i <= num; i++ ){ //2 den başlattık 1'i atladık zaten 1 etkisiz old için
        toplam *= i

    }

    return toplam ;
}

/*
    First Factorial

    -Using the JavaScript language, have the function FirstFactoria1(num)
take the num parameter being passed and return the factorial of it (ie.
if num - 4, return (4 * 3 * 2 * 1)). For the test cases, the range will
be between 1 and 18.
*/