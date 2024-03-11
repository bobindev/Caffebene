console.log("TRAIN AREA");
/*K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;*/

function countVowels (str:string) {
  let numVowel = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str) {
    if(vowels.includes(char)) {
      numVowel++;
    }
  }
  return numVowel;
}
console.log(countVowels('string'));

