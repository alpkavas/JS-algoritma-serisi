export const questionmark = (str) =>  {
    if(str.lengt < 5){
       return false
    }

    const newStr = str.replace(/[^0-9?]/g, "")

    const arrStr = newStr.split("")

    let sums = []; //foreach toplama işlemlerinde 10 bulursak buraya gelecek ve 10 değerini burada arayacağız
    let sum = 0
    let iterator = 0 // foreachteki index değerleri arasında daha rahat dolaşabilmek için tanımladık. Bunun sebebi 4 sonraki rakamı toplamak için örnek:  aa2???6 kendinden sonraki 4. karakter toplanacak

    arrStr.forEach(element => {
        if(element != "?"){
            sum = parseInt(element) + parseInt(arrStr[iterator + 4])
            sums.push(sum)
        }

        iterator++
    });
    console.log(str);
    console.log(newStr);
    console.log(sums);
    

}

/*
    eğer rakam çiftinin arasında üç adet ??? varsa rakamları topla eğer toplam 10 eşitse true değilse false
        acc???6asdasdas?asdasd*??*asdasd???s2???2 => 1. test  true dönecek
        acvb???3?12asdas??**123---???1 false döner
        1???5 => toplam 6 false döner min 5 karakter olmalı bu sebeple
*/