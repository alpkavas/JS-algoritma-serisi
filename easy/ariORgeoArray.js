export const ariOrgeoArray = (arr) => {
   let ari = arr[1] - arr[0]
   let geoRatio = arr[1] / arr [0]
   let isAri = true
   let isGeo = true
   
   for(let i= 2 ; i< arr.length ; i++){
    if(arr[i] - arr[i-1] != ari){
        isAri = false
    }
    if(arr[i] / arr[i-1] != geoRatio){
        isGeo = false
    }
}
    if(isAri){
        return "Arithmetic"
    }else if(isGeo){
        return "Geometric"
    }else{
        return -1;    
    }

}

/*
    Arith Geo
    Using the JavaScript language, have the function ArithGeo(arr) take
the array of numbers stored in arp and return the string
"Arithmetic" if the sequence follows an arithmetic pattern or
return "Geometric" if it follows a geometric pattern. if the
sequence doesn't fol Iow either pattern return -1. An arithmetic
sequence is one where the difference between each of the numbers is
consistent, w here as in a geometric sequence, each term after the
first is multiplied by some constant or common ratio.

Arithmetic example: [2, 4, 6, 8] and 
Geometric example: [2, 6, 18, 54] .  

Negative numbers may be entered as
parameters, e Will not be entered, and no array Will contain all
the same elements

*/