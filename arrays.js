var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, string) {
  return [string, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, string) {
  chocolateBars.unshift(string);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, string) {
  return [...chocolateBars, string];
}

function destructivelyAddElementToEndOfArray(chocolateBars, string) {
  chocolateBars.push(string);
  return chocolateBars
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift(string);
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1)
  return chocolateBars;
}


