const average = function(list) {
  let sum = 0;

  for (const num of list) {
    sum = sum + num;
  }

  return sum / list.length;
};

console.log(average([3, 5, 7]));

