type PointsType = {
	x: number,
	y: number
};

interface IcubicBezierCurve {
	initialAxis: PointsType,
	initialControlPoint: PointsType,
	endingControlPoint: PointsType,
	endingAxis: PointsType,
};

export const pathFromBezierCurve = (cubicBezierCurve: IcubicBezierCurve) => {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis,
  } = cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};
