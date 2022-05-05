// Algorithm to find an specific number in a ordered list of numbers
var example1 = [1, 2, 4, 5, 6, 7, 8];

const binarySearch = (numberList, item) => {
  var minimum = 0;
  var maximum = numberList.length - 1;

  while (minimum <= maximum) {
    var mid = Math.floor((minimum + maximum) / 2);
    var guess = numberList[mid];

    if (item == guess) {
      return "the number it is in the position " + mid;
    }

    if (item <= guess) {
      maximum = mid - 1;
    } else {
      minimum = mid + 1;
    }
  }
  return "the number is not included in the list";
};

console.log(binarySearch(example1, 2));
console.log(binarySearch(example1, 1));
console.log(binarySearch(example1, 8));
console.log(binarySearch(example1, 9));

// Trying to find an specific number, using linear search
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const linearSearch = (val, arr) => {
  for (const index in arr) {
    if (val === arr[index]) {
      return "The value is in the position " + index;
    }
  }
  return "The value does not exist in the array.";
};

console.log("");
console.log(linearSearch(11, values));
console.log(linearSearch(2, values));
console.log(linearSearch(3, values));
console.log(linearSearch(0, values));

const binarySearch2 = (val, arr) => {
  let lower = 0;

  // considering the counting of position starts always from 0
  // the arr.length-1 will give us the index 10 (length 11 - 1),
  // that corresponds the last element.
  let upper = arr.length - 1;

  while (lower <= upper) {
    let mid = Math.round((lower + upper) / 2);

    if (val === arr[mid]) {
      return "The value is in the position " + mid;
    }

    if (val < arr[mid]) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }

  return "The value does not exist in the array.";
};

console.log("");
console.log(binarySearch2(11, values));
console.log(binarySearch2(2, values));
console.log(binarySearch2(3, values));
console.log(binarySearch2 (0, values));