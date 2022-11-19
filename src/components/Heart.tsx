import { pathFromBezierCurve } from "../utils/formula";
import { PointsType } from "../models/models";

const Heart = ({position}: {position: PointsType}) => {
	const { x, y } = position;
	const heartStyle = {
		fill: "#da0d15",
		stroke: "#a51708",
		strokeWidth: "2px"
	};

	const leftSide = {
		initialAxis: {
			x: x,
			y: y, 
		},
		initialControlPoint: {
			x: -15,
			y: -15
		},
		endingControlPoint: {
			x: -30,
			y: 8
		},
		endingAxis: {
			x: 0,
			y: 30
		}
	};

	const rightSide = {
		initialAxis: {
			x: x,
			y: y, 
		},
		initialControlPoint: {
			x: 15,
			y: -15
		},
		endingControlPoint: {
			x: 30,
			y: 8
		},
		endingAxis: {
			x: 0,
			y: 30
		}
	};

	return (
		<g filter="url(#shadow)">
			<path
				style={heartStyle}
				d={pathFromBezierCurve(leftSide)}
			/>
			<path
				style={heartStyle}
				d={pathFromBezierCurve(rightSide)}
			/>
		</g>
	);
}

export default Heart;
