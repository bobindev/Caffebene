console.log("TRAIN AREA");
//TASK - W

function chunkArray(arr: any, num: number) {
  let tempArray = [];
  for (let i=0; i < arr.length; i += num) {
      tempArray.push(arr.slice(i, i + num));
  } return tempArray;

}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3));



