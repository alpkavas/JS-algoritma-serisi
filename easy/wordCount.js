export const wordCount = (str) => {
    const arr = str.trim().split(" ").length
    return arr
}

/*
 Verilen cümlenin kelime sayısı dönecek.

 Never eat shredded wheat => 4 sayısı dönmeli

 trim() kullanmamız sebebi baştaki ve sondaki boşlukları silip fonksiyonu çalıştırmamız.

*/