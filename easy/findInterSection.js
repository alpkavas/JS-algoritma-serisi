export const findIntersection = (arr) => {
    // yeni bir array değişkeni tanımla
    //  split, replace(boşlukları silmek için)
    // foreach, kullnarak arr içindeki karakterleri diğer array içerisinde arayacaz varsa yeni arraye pushlayacaz

    let intersection = [];

    const set1 = arr[0].replace(/\s/g,"").split(",")
    const set2 = arr[1].replace(/\s/g,"").split(",")

    set2.forEach(element => {
        if(set1.includes(element)){
            intersection.push(element)    
        }
    }); // set2 üzerinden dönmemizin sebebi soruda  set2 de olan rakam set 1 de var mı şeklinde old için.

        if(intersection.length != 0) {
            return intersection.toString();
        }else{
            return false
        }



}

/*
    Have the functİon FİndIntersectİon(strArr) read the array Of strings
stored in strArr which Will contain 2 elements: the first element Will
represent a list of comma-separated numbers sorted in ascending order,
the second element Kill represent a second list of corma-separated
numbers (also sorted). Your goal is to return a coma-separated string
containing the numbers that occur in of strArr in sorted
order. if there is no intersection, return the false.
*/