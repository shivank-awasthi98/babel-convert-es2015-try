const add = (...args) => {
  var arr = [...args];
  let sum = 0;
  arr.forEach(n => {
    sum += n;
    console.log(sum);
  });
  return sum;
};
console.log(add(1, 2, 2));
