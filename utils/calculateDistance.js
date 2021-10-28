// I will use a simple maths formula that I learned in primary school to calculate distance
// Formula to find distance between 2 points on a grid/plane where each points have x-axis value and y-axis value:
// Distance (a, b) = √(x2 - x1)^2 + (y2 - y1)^2, where square root is applied to the entire formula
// If this formula is unclear, please refer this link: https://orion.math.iastate.edu/dept/links/formulas/form2.pdf

const calculateDistance = (point1, point2) => {
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
  );
};

export default calculateDistance;
