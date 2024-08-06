function mergeSort(array) {
  if (array.length == 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);

  const left = mergeSort(firstHalf);
  const right = mergeSort(secondHalf);

  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

const myArray1 = [3, 2, 1, 13, 8, 5, 0, 1];
const myArray2 = [105, 79, 100, 110];
const myArray3 = [3, 1, 2, 13, 8];

console.log(mergeSort(myArray1));
console.log(mergeSort(myArray2));
console.log(mergeSort(myArray3));
