console.log("TRAIN AREA");
//TASK - Y

function findIntersection (arr1:any, arr2: any) {
  let intersection = [];
  for (let i=0; i<=arr1.length; i++) {
     let ele = arr1[i];
  if (arr2.indexOf(ele) !== -1 && intersection.indexOf(ele) === -1) {
    intersection.push(ele);
  }
  } 
  return intersection;
}

console.log(findIntersection([1,2,3], [3,2,0]));


