// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
return Object.assign({}, driver, { [key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(){
  driver.name = 'Sam';
  driver.address = '12 Broadway';
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromdriverByKey(driver, key) {
  delete driver[key];
return driver;
}
