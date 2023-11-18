export const spaceWithCapitalLetter = (str) => {
    let a = str.split(" ");
    let b = a.map((word) => {
        for(let i = 0 ; i <= a.length ; i++ ){
           return word[i][0].toUpperCase() + word.slice(1)
        }
    })

    console.log(a);
    console.log(b.join(" "));
    
}

/*
    Kelimenin ilk harfi büyük olacak kelimeler arası bir boşluk bulunacak.
    Beklenen çıktı // "Merhaba Dünya Ben Geldim." şeklinde

*/