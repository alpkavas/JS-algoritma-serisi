export const swapCase = (str) => {
    let result = ""  //Hata vermedi
  for(let i in str){
    if(str[i].toUpperCase() === str[i]){
        result += str[i].toLowerCase()
    }else{
        result += str[i].toUpperCase()
    }
}
    return result

    let newArr = [] // İkinci Yol

    str.split("").forEach((item) => {
        if((/[^a-zA-Z]/).test(item)){
            newArr.push(item)
        }else if((/[a-z]/).test(item)){
            newArr.push(item.toUpperCase())
        }else if((/[A-Z]/).test(item)){
            newArr.push(item.toLowerCase())
        }
    })

  

    return newArr.join("")

}

/* 
 verilen str için büyük harfleri küçük küçük harfleri büyük yapıp
 döndür
    Hello WorD! Happy Year 2023

*/