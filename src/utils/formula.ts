import { PointsType, EventPointsType } from "../models/models";

type PointsName = "initialAxis" | "initialControlPoint" | "endingControlPoint" | "endingAxis";

export function pathFromBezierCurve(cubicBezierCurve: Record<PointsName, PointsType>): string {
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

export function radiansToDegrees(radians: number): number { 
	return (radians * 180) / Math.PI;
}

export function calculateAngle(x1: number, y1: number, x2: number, y2: number): number {
	if(x2 >= 0 && y2 >=0) {
		return 90;
	}else if(x2 < 0 && y2 >=0) {
		return -90;
	}

	const divident: number = x2 - x1;
	const divisor: number = y2 - y1;
	const quotient: number = divident / divisor;
	
	return radiansToDegrees(Math.atan(quotient)) * -1;
}

export function getCanvasPosition(event: EventPointsType): PointsType {
	const svg: any = document.getElementById("aliens-go-home-canvas");
	const point = new DOMPoint(event.clientX, event.clientY);

	point.x = event.clientX;
	point.y = event.clientY;

	const screen = svg.getScreenCTM().inverse();
	const {x, y} = point!.matrixTransform(screen);
	
	return {x, y}
}
