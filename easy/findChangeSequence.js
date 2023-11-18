export const findChangeSequence = (array) =>{
  const n = array.length;

  if (n < 3) {
    return -1;
  }

  let increasing = array[0] < array[1];
  let changeIndex = -1;

  for (let i = 1; i < n; i++) {
    if ((increasing && array[i] < array[i - 1]) || (!increasing && array[i] > array[i - 1])) {
      changeIndex = i - 1;
      break;
    }
  }

  return changeIndex;
}


/* 
    This challenge requires you to determine at what index in an ar•ray
the sequence changes frer increasing to decreasing or vice versa.
For example, İf the arpay Nere [1, 2, 4, 6, 4, 3, 1 ] then
your program should return 3 because at index 3 the sequence
begİns to change fram İncreaşİng to decreasİng.


İf there is no change in sequence, then your program should return
-1.

İstenilen Durum verilen dizi artışta veya azalışta olan eğilimi ne zaman 
kırıldıysa o kırılan değerin indexini dönmemizi istiyor eğer kırılmamışsa -1 döner

örnekte verine değer 6 dönmesi beklenen değer 3
*/