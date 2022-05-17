const array = [1, 4, 7, 8, 2, 4, 0];

// .slice()

const findMaximum = (numArray) => {
  // copy the given array
  nums = numArray.slice();

  // base case: if we're at the last number, return it
  if (nums.length === 1) {
    return nums[0];
  }

  // check the first two numbers in the array and remove the lesser
  if (nums[0] < nums[1]) {
    nums.splice(0, 1);
  } else {
    nums.splice(1, 1);
  }

  // with one less number in the array, call the same function
  return max(nums);
}

console.log(max(array));
