console.log("TRAIN AREA");
//TASK - X
function countOccurrences(obj:any, str:string, count:number) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return countOccurrences(obj[key], str, count);
    } if (key === str) {
      count++;
    }
  }
  return count;

}
console.log(countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } }, 'model', 0));



