// Exercise 2: Single Number

const singleNumber = function (nums) {
  // Start coding here
  let result = 0;

  console.log(nums.length);

  for (let i = 0; i <= nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
