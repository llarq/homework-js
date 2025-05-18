const processArray = (arr, callback) => {
  // for (word of array) {
  //   const arr = ['Mary', 'Poly', 'Ann', 'Svetla']
  // }
  const arr = ['Mary', 'Poly', 'Ann', 'Svetla']
  return callback(arr)
}
const getSum = function (arr) {return arr.reduce((acc, curr) => acc + curr) }
const getMin = function (arr) {return Math.min()}
const getMax = function (arr) { return Math.max() }
console.log(getSum);
console.log(getMin);
console.log(getMax);


