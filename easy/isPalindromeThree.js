export const isPalindromeThree = (str) =>{
    const onlyStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
    if(isPalindrome(onlyStr))return true

    let [removed, newArray] = removeLetter(onlyStr)

    // console.log(removed, newArray);

    if(isPalindrome(newArray)){
        return removed
    }else{
        let [removed2, newArray2] = removeLetter(newArray)
       if(isPalindrome(newArray2)){
        return removed2 + "-" + removed
        }else{
            return "not Possible"
        }
    }
    
}

function isPalindrome(str){
    return str.split("").reverse().join("") === str ? true : false

}

function removeLetter(str){
    let it = Math.floor(str.length/2)
    let arr = str.split("")
    for(let i =0 ; i< it; i++){
        if(str[i] != str[str.length - 1 - i]){ //hem sağdan hem soldan harfler geliyor ve kontrol yapılıyor
            arr.splice(i,1)
            return [str[i], arr.join("")]
        }    
    }
}





/* 
    
max 1 veya 2 karakter çıkartarak palindrome çıktısına ulaşmaya çalışıyoruz.
Çıkarttığımız karakterler return edecek

örnek: 1-) kjjjhjjj
    beklenen çıktı "k"

    2-) abcjhba
    output = "jh"

    eğer koşullara uymuyorsa "not possible" dönecek.
*/