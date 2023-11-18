export const timeConvert = (num) => {
    // let hours = Math.floor(num / 60) // Uzun yol
    // let minutes = (num % 60)
    // if(minutes < 10){
    //     minutes = "0" + (num % 60)
    // }

    // console.log(hours + ":" + minutes);

    return `${Math.floor(num / 60)}:${num % 60}` // ikinici ve daha basit çözüm yolu


}

/*
    istenen verilen sayıyı saat ve dakika cinsine dönüştürmek.
    örnek: 
    num = 180 Beklenen çıktı 3:0 gibi 

*/