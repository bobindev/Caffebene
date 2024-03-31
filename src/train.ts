console.log("TRAIN AREA");
//TASK - T

function mergeSortedArrays (arr1: any[], arr2: any[]) {
   const concat = arr1.concat(arr2);
   concat.sort(function(a: number, b: number){return a-b});
   return concat;
}  

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));


