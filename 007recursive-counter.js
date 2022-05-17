const array = [1, 4, 7, 8, 2, 4, 0];

const counter = function (arr) {
  if (arr.length < 1) {
    return 0;
  } else {
    arr.pop();
    return 1 + counter(arr);
  }
};

console.log(counter(array));
