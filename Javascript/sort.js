function sortByDescendingOrder(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}


const array = [1, 5, 8, 2, 4];

const sortedArray = sortByDescendingOrder(array);

console.log(sortedArray); 
