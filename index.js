// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  //console.log(drivers);
  function revenueCheck(driver) {
    return driver.revenue > revenue;
  }
  return drivers.filter(driver => revenueCheck(driver));
}

function driverNamesWithRevenueOver(drivers, revenue) {
  //console.log(drivers);
  let driverObjects = driversWithRevenueOver(drivers, revenue);
  return driverObjects.map(driver => driver.name);
}

function exactMatch(drivers, objectTest) {
  // console.log(drivers);
  // console.log(objectTest);
  function attrTest(driver) {
    let testKey = Object.keys(objectTest)[0];
    let testValue = Object.values(objectTest)[0];
    return driver[testKey] === testValue;
  }
  return drivers.filter(driver => attrTest(driver));

}

function exactMatchToList(drivers, objectTest) {
  let driverObjects = exactMatch(drivers, objectTest);
  return driverObjects.map(driver => driver.name);
}
