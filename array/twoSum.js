const arr = [2, 7, 11, 15];
const targetSum = 9;

// 브루트 포스 방식
function twoNumberSum(arr, targetSum) {
  let targetNum = [];

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return (targetNum = [arr[i], arr[j]]);
    }
  }
  return targetNum;
}

twoNumberSum(arr, targetSum);
//{ 7: 0}

function twoNumberSumMap(arr, targetSum) {
  let map = {};

  for (i = 0; i < arr.length; i++) {
    const potentialValue = targetSum - arr[i];
    if (potentialValue in map) {
      return [map[potentialValue], i];
    } else {
      map[arr[i]] = i;
    }
  }
  return [];
}

console.log(twoNumberSumMap(arr, targetSum));

function twoNumberSumPointer(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const currSum = arr[leftPointer] + arr[rightPointer];
    if (currSum === targetSum) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (currSum < targetSum) {
      leftPointer++;
    } else if (currSum > targetSum) {
      rightPointer--;
    }
  }
  return [];
}

// console.log(twoNumberSumPointer(arr, targetSum));
