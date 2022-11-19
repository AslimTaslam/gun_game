import { PointsType } from "../models/models";

const CannonBall = ({position}: {position: PointsType}) => {
	const { x, y } = position;
	const ballStyle = {
		fill: "#777",
		stroke: "#444",
		strokeWidth: "2px"
	};

	return (
		<ellipse
			style={ballStyle}
			cx={x}
			cy={y}
			rx="16"
			ry="16"
		/>
	);
}

export default CannonBall;
