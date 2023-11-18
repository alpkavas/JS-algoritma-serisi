export const binaryRevese = (str) => {
    let newStr = (+str).toString(2)

    return parseInt((("0".repeat(8 - newStr.length)) + newStr).split("").reverse().join(""), 2)

}

/*
    İstenilen şey verilen değeri binarye çevir sonra reverse al sonra tekrar decimal yaz

*/