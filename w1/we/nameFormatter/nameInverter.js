const nameInverter = function(name) {
  let newName = name.trim();
  console.log(newName[3]);
  if (name === '') {
    return '';
  } else if (newName.split(' ').length === 2) {
    if (newName[3] === "." && newName[2] === ".") {
      return newName;
    } else {
      return newName.split(" ").reverse().join(", ");}
  } else if (newName[3] == "." && newName[2] == ".") {
    return '';
  }
  
  return newName;
}

console.log(nameInverter("Mrs. "));
module.exports = nameInverter;