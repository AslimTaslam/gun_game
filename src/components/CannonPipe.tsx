import { pathFromBezierCurve } from "../utils/formula";

const CannonPipe = ({rotation}: {rotation: number}) => {
	const cannonPipeStyle	= {
		fill: "#999",
		stroke: "#666",
		strokeWidth: "2px"
	};

	const transform: string = `rotate(${rotation}, 0, 0)`;

	const muzzleWidth: number = 30;
	const halfMuzzle: number = 15;
	const height: number = 75;
	const yBasis: number = 52.5;

	const cubicBezierCurve = {
		initialAxis: {
			x: -halfMuzzle,
			y: -yBasis
		},
		initialControlPoint: {
			x: -30,
			y: height * 1.7
		},
		endingControlPoint: {
			x: 60,
			y: height * 1.7
		},
		endingAxis: {
			x: muzzleWidth,
			y: 0
		}
	}

	return (
		<g transform={transform}>
			<path
				style={cannonPipeStyle}
				d={pathFromBezierCurve(cubicBezierCurve)}
			/>
			<line
				x1={-halfMuzzle}
				y1={-yBasis}
				x2={halfMuzzle}
				y2={-yBasis}
				style={cannonPipeStyle}
			/>
		</g>
	)
}

export default CannonPipe;
