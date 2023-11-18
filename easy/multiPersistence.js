export const  multiPersistence = (num) => {
    if(num < 10) return 0
    let count = 1

    let MultiDiggit = multi(num)

    while(MultiDiggit >= 10){
        count++
        MultiDiggit = multi(MultiDiggit)
    }


    return `Beklenen Değer = ${count} Kontrol eltmek için ${MultiDiggit}`

}

const multi = (num) =>{
    let multiple = 1
    let arr = num.toString().split("")

    for(let i = 0 ; i < arr.length ; i++){
        multiple *= parseInt(arr[i])
    }

    return multiple
}


/*

Multiplicative Persistence
Rakamların birbirleri ile çarpımının tek rakam oluncaya kadar tekrarlanması
gereken çarpma İşlemidir.
Örneğin :
    39 rakamını ele alalım

    3*9=27
    2*7=14
    1*4=4 // Kontrol değeri 4 olacak

    toplam 3 kere de işlem bitmiş
    beklenen cevap 3


*/