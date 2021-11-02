// Function that gets a list in array for and outputs in a better string format
const joinList = function(list) {
  let newList = "";

  // If the array from list is empty, it will return an empty string
  if (list.length === 0) {
    return newList
  }
  // loop goes through the list, and adds each item to the newList variable as a string, but stops at the second last item.
  for (let i = 0; i < list.length - 1; i++) {
    newList = newList + list[i] + ", ";
  }
  // adds the last item to the list with no comma and returns the answer.
  return newList = newList + list[list.length - 1];
};


// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
