export const decimalToRoman = (num) => {
   const romanSymbols = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let roman = ""

    for(let i in romanSymbols){ // konsola bak daha anlaşılır bir hale geliyor
        // diyoruz ki 3999 >= 1000 evet o zaman romana sembolü ekle(M) ve o sembole karşılık gelen rakamı çıkart
        //döngü kural bozulana kadar devam edecek ve doğru çıktıyı üretecek
        console.log(i +"-" +romanSymbols[i]);
        while(num >= romanSymbols[i]){
            roman += i
            num-= romanSymbols[i]
        }
    }
    return roman
}

/*
    verilen sayıyı roma rakamına dönüştürüyoruz.

    3999 => MMMCMXCIX çıktı vermesi gerekir. max 3999 yazılabilir 

*/