export const letterCount = (str) => {
//   const arr = str.split(" "); =========> Kontrol yapılmadı kontrollü versiyonu ↓↓↓
//   const counts = [];

//   for (let i = 0; i < arr.length; i++) {
//     const word = arr[i];
//     let count = 0;
//         for (let j = 0; j < word.length; j++) {
//             const currentLetter = word[j];
//             let letterCount = 0;
//                 for (let k = 0; k < word.length; k++) {
//                     if (word[k] === currentLetter) {
//                     letterCount++;
//                     }
//                 }

//             if (letterCount > count) {
//                 count = letterCount;
//             }
//     }

//     counts.push(count);
//   }

//   console.log(counts.sort((a,b) => a -b ).reverse()[0]);


    const arr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ") // cümleyi harf olmayanlardan arındırdık ve boşluklarla ayırarak yeni bir array oluşturduk.
    let word = []

    for (let i = 0; i < arr.length; i++) {
        let obj = {}

        arr[i].split("").forEach((letter) =>{
            letter in obj ? obj[letter] += 1 : obj[letter] = 1
        })
        word.push(obj)
    }
    let maxFrequencies = [];

    word.forEach((obj) => {
        maxFrequencies.push(Math.max(...Object.values(obj)))
    })

    console.log(maxFrequencies);

    let maxValue = Math.max(...maxFrequencies)

     return maxValue < 2 ? -1 : (arr[maxFrequencies.indexOf(maxValue)] ? arr[maxFrequencies.indexOf(maxValue)] : -1 ) // Max value olan kelimenin kendisini döner varsa yoksa -1
};



/*
    Letter Count I
Have the function take the str
being passed and return the first word Mith the greatest nu•ber
of repeated letters.
For "Today. is the greatest day evere!" should return
greatest because it has 2 e 's (and 2 t 's) and it before
ever Khich also has 2 e' s.
if there are no with repeating letters return
Words Will be separated by spaces.
*/