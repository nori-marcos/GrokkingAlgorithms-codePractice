const array = [1, 4, 7, 8, 2, 4, 0];

const sum = function(arr) {
  if (arr.length < 1) return 0;

  return arr.pop() + sum(arr);
};

console.log(sum(array));
