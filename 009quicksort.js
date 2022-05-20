const quicksort = (array) => {
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  const pivot = array[0];
  const greater = [];
  const equal = [];
  const smaller = [];

  for (number of array) {
    if (number < pivot) {
      smaller.push(number);
    }

    if (number === pivot) {
      equal.push(number);
    }

    if (number > pivot) {
      greater.push(number);
    }
  }

  return quicksort(smaller).concat(equal).concat(quicksort(greater));
};

const array = [1, 4, 7, 8, 2, 4, 4, 4, 0];

console.log(quicksort(array));
