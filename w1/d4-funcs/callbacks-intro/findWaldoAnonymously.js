// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  
  // using for each, we use the element variable to comg through the array, and the index to tell us where waldo is. Callbac
  names.forEach((element, index) => {if (element === "Waldo") {found(index)}})

}

// uses an anonymous function
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});