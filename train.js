console.log("TRAIN ARIA")
/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK
1. function tuzish
2. ikkita variablelar tashkil etiladi
3. loop hosil qilish
4. arraydagi sonlarni taqqoslash 
5. eng katta qiymatning 1-indexni aniqlsh
6. aniqlangan 1-indexni return qilish
*/
function getHighestIndex(arr) {
    let numMax = arr[0];
    let maxIndex = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i]>numMax) {
            numMax = arr[i];
            maxIndex = i;
        }
    } return maxIndex;
}
 


console.log(getHighestIndex([3, 6, 2, 56, 32, 5, 89, 32]));