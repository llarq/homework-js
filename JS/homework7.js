// const arr = [1, 2, 3, 4];
// arr[1] = 10
// console.log(arr);


// const arr1 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]
// arr1[3] = [13, 14, 15, 16]
// console.log(arr1);



// const arr2 = [1, 4, 6, 12, 55];
// for (i = arr2.length - 1; i >= 0; i -= 1) {
//   console.log(arr2[i]);
// }


// const arr3 = [11, 22, 44, 66, 88];
// for (i = 0; i <= arr3.length - 1; i += 1) {
//   console.log(arr3[i]);
// }


// const arr4 = [
//   [1, 2, 3, 4, 5, 5, 5, 5],
//   [6, 7, 8, 9],
//   [10, 11, 12, 13, 14],
//   [15, 16, 17, 18, 19, 19],
//   [20, 21, 22]
// ];
// for (i = 0; i <= arr4.length - 1; i += 1) {
//   if (arr4[i].length < 5) {
//     continue
//   }
//   console.log(arr4[i]);
// }


const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNum = arr5[1]
for (i = 0; i <= arr5.length - 1; i += 1) {
  if (arr5[i] > maxNum) {
    maxNum = arr5[i]
  }
}
console.log(maxNum)

// const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i <= arr6.length - 1; i += 1) {
//   if (arr6[i] % 2 !== 0) {
//     continue
//   }
//   alert(`here paired numbers: ${arr6[i]}`)
// }