import { pathFromBezierCurve } from "../utils/formula";

const CannonBase = (props: any) => {
	const cannonBaseStyle = {
		fill: "#a16012",
		stroke: "#75450e",
		strokeWidth: "2px"
	};

	const baseWith: number = 80;
	const halfBase: number = 40;
	const height: number = 60;
	const negativeHeight: number = height * -1;

	const cubicBezierCurve = {
		initialAxis: {
			x: -halfBase,
			y: height,
		},
		initialControlPoint: {
			x: 20,
			y: negativeHeight
		},
		endingControlPoint: {
			x: 60,
			y: negativeHeight
		},
		endingAxis: {
			x: baseWith,
			y: 0
		}
	};

	return (
		<g>
			<path
				style={cannonBaseStyle}
				d={pathFromBezierCurve(cubicBezierCurve)}
			/>
			<line
				style={cannonBaseStyle}
				x1={-halfBase}
				y1={height}
				x2={halfBase}
				y2={height}
			/>
		</g>
	)
}

export default CannonBase;
