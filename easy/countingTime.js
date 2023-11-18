export const countingTime = (time) =>{
    const times = time.split("-")
    let time1 = {};
    let time2 = {};

    time1.meridiem = times[0].slice(-2)
    time1.hour = parseInt(times[0].split(":")[0])
    time1.minute = parseInt(times[0].slice(-4,-2))

    time2.meridiem = times[1].slice(-2)
    time2.hour = parseInt(times[1].split(":")[0])
    time2.minute = parseInt(times[1].slice(-4,-2))

    let difMin = 0
    let result = 0

    if(time1.meridiem === time2.meridiem){
        difMin = (time2.hour * 60 + time2.minute) - (time1.hour * 60 + time1.minute) 
        result = difMin > 0 ? difMin : 24*60 + difMin // minutes kendisi negatif olacağı için "+" yazdık
    }else {
        difMin = (time2.hour * 60 + time2.minute) - (time1.hour * 60 + time1.minute) 
        result = 12*60 + difMin
    }
    return result
}

/*
    Counting Minutes 
Using the JavaScrİpt language. have the functİon CountİngMİnutesI(ştr) take the
str parameter being passed which Will be two times (each properly formatted
fullWidth a colon and am or pm) separated by a hyphen and return the total
number of minutes between the two tines .
The time be İn a 12 hour Clock format.
-----------------------------------------------------
For example:
İf str İs 9:00am-10:00am then the output should be 60.

if str is 1:00pm-11:00am the output şhould be 1320.
-----------------------------------------------------
A. M. Ante Meridiem =>  Öğleden Önce
P.M  Post Meridiem =>  öğleden Sonra

*/