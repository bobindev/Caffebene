console.log("TRAIN AREA");
//TASK - ZA

function sortByAge(arr: any) {
  return arr.sort((a: any, b: any) => a.age - b.age);
}

console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));
