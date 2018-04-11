'use strict';
const stock = [128, 97, 121, 123, 98, 97, 105];

function findMax(arr) {
  let minSeen = arr[0];
  let maxValue = arr[1] - minSeen;
  let i = 1;
  for (i; i < arr.length; i++) {
    if (arr[i] < minSeen) {
      minSeen = arr[i];
    }
    if (arr[i] - minSeen > maxValue) {
      maxValue = arr[i] - minSeen;
    }
  }
  return maxValue;
}

console.log(findMax(stock));