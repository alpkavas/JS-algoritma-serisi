export const productDigits = (num) => {
    let arr = [] //"100" sayısı için hata aldım bu sebeple biraz değiştirdim
    for (let i=1; i<=num; i++) { // pozitif tam sayı bölenlerini alıyoruz
        num % i === 0 && arr.push(i)
    }

let medium = Math.floor(arr.length/2) // medium tam sayıya çevirdim 


    if(arr[medium-1]*arr[medium] === num){ // kontrolleri consola bakarak yapabilirsiniz.
        console.log(arr, arr[medium],arr[medium - 1],"medium tam sayı");

        return arr[medium].toString().length + arr[medium - 1].toString().length
    }else{
        console.log(arr, arr[medium - 1],arr[medium + 1],"medium tam sayı değil");

        return arr[medium -1].toString().length + arr[medium +1].toString().length
    }

}



/* 
    Challenge
Using the JavaScript language, have the function ProductDigits(num)
take the num parameter beİng passed Whİch be a posİtİve integer,
and determine the least amount of digits you need to multiply to
produce İt.
For example: if num is 24 then you can multiply 8 by 3
which produces 24, so your program should return 2 because
there is a total of only 2 digits that are needed.
Another example: if num is 90, you can multiply 10 * 9,
so in this case your program should output 3 because
you cannot reach 90 wİthout usİng a total of 3 digits İn
your multiplication.
Sample Test Cases
Input : 6
Output : 21
Input : 23
Output : 3




*/