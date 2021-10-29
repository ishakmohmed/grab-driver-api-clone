const findNearestEligibleDriver = (drivers) => {
  // If this function is invoked, it is certain that at least one element exists in array, hence why I wrote "drivers[0]" in next line without any validation
  let nearestDriver = drivers[0];

  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].distanceToUser < nearestDriver.distanceToUser)
      nearestDriver = drivers[i];
  }

  return nearestDriver;
};

export default findNearestEligibleDriver;
