// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  //Start coding here

  let newWord = s.trim().split(" ");
  console.log(newWord);
  let reverseIndex = newWord.reverse();
  console.log(reverseIndex);
  let selectWord = reverseIndex[0];
  console.log(selectWord);

  return selectWord.length;
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
