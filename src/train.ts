console.log("TRAIN AREA");
//Task-J

function findLongestWord(str: string) {
  var words = str.split(" ");
  var longest = "";

  for (var word of words) {
    if (word.length > longest.length) longest = word;
  }

  return longest;
}
console.log(findLongestWord("I come from Uzbekistan"));