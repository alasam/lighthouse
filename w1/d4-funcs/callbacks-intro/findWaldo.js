// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  
  // using for each, we use the element variable to comg through the array, and the index to tell us where waldo is. Callbac
  names.forEach((element, index) => {if (element === "Waldo") {found(index)}})

}

const actionWhenFound = function(index) {
  console.log(`Found him at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);