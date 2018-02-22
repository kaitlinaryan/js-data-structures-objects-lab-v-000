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
  delete driver.name;
  delete driver.address;
  return driver;
}

function destructivelyDeleteFromdriverByKey(driver, key) {
return driver;
}
