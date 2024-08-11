function fibsNum(num) {
  if (num < 2) {
    return num;
  }

  return fibsNum(num - 1) + fibsNum(num - 2);
}

console.log(fibsNum(7)); //13
