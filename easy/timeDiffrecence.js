export const timeDiffrecence = (t1,t2) => {
    let hour = Number(t2.split(":")[0]) -  Number(t1.split(":")[0])
    let min = Number(t2.split(":")[1]) -  Number(t1.split(":")[1])
    if(min < 0){
        hour--
        min = min + 60
    }
    if(hour < 0) hour = hour + 24
    if(hour < 10) hour = "0" + hour.toString()
    if(min < 10) min = "0" + min.toString()
    

    return hour.toString() + ":" + min.toString()
}

/* 
    Verilen iki saat arası farkı saat cinsinden yazılacak 
    01:00 02:00 output: 01:00 şeklinde
    15:05 13:04 output: 21:59

*/
