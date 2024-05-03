console.log("TRAIN AREA");
//ZH-TASK:


function findDisappearedNumbers(arr: number[]) {
  let result = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));
