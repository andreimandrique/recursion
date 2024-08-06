function fibsRec(num) {
  if (num == 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  } else {
    let result = fibsRec(num - 1);
    result.push(result[result.length - 2] + result[result.length - 1]);
    return result;
  }
}

console.log(fibsRec(8));
