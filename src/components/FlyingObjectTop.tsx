import { PointsType } from "../models/models";import { pathFromBezierCurve } from "../utils/formula";

const FlyingObjectTop = ({position}: {position: PointsType}) => {
	const { x, y } = position;
	const style = {
		fill: "#b6b6b6",
		stroke: "7d7d7d"
	};
	const baseWith: number = 30;
	const halfBase: number = 15;
	const height: number = 18;

	const cubicBezierCurve = {
		initialAxis: {
			x: x - halfBase,
			y
		},
		initialControlPoint: {
			x: 10,
			y: -height
		},
		endingControlPoint: {
			x: 30,
			y: -height
		},
		endingAxis: {
			x: baseWith,
			y: 0
		}
	}

	return (
		<path
			style={style}
			d={pathFromBezierCurve(cubicBezierCurve)}
		/>
	);
}

export default FlyingObjectTop;
