function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let item = callback(array[i], i);
    newArray.push(item);
  }
  return newArray;
}

const mappedArray = map([1, 2, 3, 4, 5], (x, index) => index * 2);
console.log(mappedArray);
