// function to check if cookie array has any raisin or not
const raisinAlarm = function(cookie) {
  for (let i in cookie) { // loops through each item in the cookie array
    if (cookie[i] === "🍇") { // if the array contains any raisins at all, will return Alert string
      return "Raisin alert";
    }
  }
  return "All Good!"; // if no raisins were found, all good string will be returned.
};

//function to check array with multiple cookie arrays and returns as an array
const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let newArr = []; // new array for answer output
  for (let i in cookies) { // loops through each array in cookies
    newArr.push(raisinAlarm(cookies[i])); // pushes the results of raisinAlarm to newArr
  }
  return newArr; // outputs newArr with results
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));