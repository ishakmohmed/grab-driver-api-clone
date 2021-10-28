const findNearestEligibleDriver = (drivers) => {
  let nearestDriver = drivers[0];

  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].distanceToUser < nearestDriver.distanceToUser)
      nearestDriver = drivers[i];
  }

  return nearestDriver;
};

export default findNearestEligibleDriver;
