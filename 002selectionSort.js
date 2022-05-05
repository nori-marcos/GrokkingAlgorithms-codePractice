const values = [2, 1, 4, 6, 0, 5, 3, 7, 9, 10, 8];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexOfSmallestNumber = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        indexOfSmallestNumber = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[indexOfSmallestNumber];
    arr[indexOfSmallestNumber] = temp;
  }

  return arr;
};

console.log(selectionSort(values));
console.log("");



const selectionSort2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexOfSmallestNumber = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        indexOfSmallestNumber = j;
      }
    }

    if(i != indexOfSmallestNumber) {
        [arr[i], arr[indexOfSmallestNumber]] = [arr[indexOfSmallestNumber], arr[i]];
    }

  }

  return arr;
};

console.log(selectionSort2(values));