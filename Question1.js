const findMinTime = (n, k, arr) => {
  let sumOfAll = arr.reduce((prev, curr) => prev + curr, 0);

  // Exceptional Cases

  // when we have same no. of painters and cards
  if (n == k) {
    return Math.max(...arr);
  }

  // when we only have one painter
  if (k == 1) {
    return sumOfAll;
  }

  // range for the loop(For first iteration max range is sumOfAll)
  let minSum = 0;
  let maxSum = sumOfAll;
  let answer = 0;
  let parts = [];

  while (minSum <= maxSum) {
    let midOfRange = minSum + (maxSum - minSum) / 2;
    let [count, partions] = findNumberOfPartition(midOfRange, arr);
    if (count == k) {
      parts = partions;
      maxSum = midOfRange - 1;
    } else {
      minSum = midOfRange + 1;
    }
  }

  let resultsArr = parts.map(el => el.reduce((prev,curr) => prev + curr), 0)
  answer = Math.max(...resultsArr)
  return answer;
};

const findNumberOfPartition = (mid, arr) => {
  let countOfPartition = 0;
  let sum = 0;
  let partitions = [];
  let left = 0;
  arr.forEach((element, index) => {
    sum += element;
    if (sum > mid) {
      sum = element;
      partitions.push(arr.slice(left, index));
      countOfPartition++;
      left = index;
    }

    if (index == arr.length - 1) {
      countOfPartition++;
      partitions.push(arr.slice(left, arr.length));
    }
  });
  return [countOfPartition, partitions];
};

let result1 = findMinTime(5, 3, [5, 10, 30, 20, 15]);
let result2 = findMinTime(4, 2, [10, 30, 20, 40]);

console.log('Minimun Time to Paint Boards for first example', result1);
console.log('Minimun Time to Paint Boards for second example', result2);
