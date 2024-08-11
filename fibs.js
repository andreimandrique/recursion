function fibs(num) {
  let result = [];

  for (let i = 0; i < num; i++) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}

console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13];
