const checkNumberOfLettersToBeAdded = (string) => {
  let numberOfLetters = 0;
  let arr = string.split('');
  let reversedArr = string.split('').reverse();

  // if string is already a pallindrom
  if (JSON.stringify(arr) == JSON.stringify(reversedArr)) {
    return numberOfLetters;
  }

  let count = 0;
  for (let i = arr.length - 1; i >= 1; i--) {
    count++;

    let a = arr.slice(i, arr.length).reverse();
    let b = a.concat(arr);
    let reverserdB = [...b];

    if (JSON.stringify(b) == JSON.stringify(reverserdB.reverse())) {
      break;
    }
  }
  return count;
};

let result = checkNumberOfLettersToBeAdded('abc');
console.log('Number of letters to be added', result);
