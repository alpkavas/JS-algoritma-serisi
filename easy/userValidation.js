export const userValidation = (str) => {
        if(
            str.length  >= 4 && str.length <= 25 && 
            (/^[a-zA-Z]/).test(str.slice(0,1)) &&//str.charAt(0)
            (/^[a-zA-Z0-9_]+$/).test(str) && 
            (/^[a-zA-Z0-9]/).test(str.slice(-1)) // son karakterini aldık
        ){
            return true
        }else {
            return false
        }
        
        console.log(str);
       
}

/* 1. Example

    1-) username between 4 and 25 characters.
    2-) It must Start a Letter
    3-) It can only contain letter, number and the undescore Character
    4-) It cannot end with underscore character

    if return true : false

*/