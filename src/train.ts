console.log("TRAIN AREA");
//ZF-TASK:

function capitalizeWords(str: string) {
  let arr = str.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join(' ');
}

console.log(capitalizeWords('name should be a string'));

//ZE-TASK:

function removeDuplicate(str: string) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeDuplicate('stringg'));