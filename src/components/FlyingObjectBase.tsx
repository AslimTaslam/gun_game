import { PointsType } from "../models/models";

const FlyingObjectBase = ({position}: {position: PointsType}) => {
	const { x, y } = position;
	const style = {
		fill: "#979797",
		storeke: "#5c5c5c"
	};

	return (
		<ellipse 
			style={style}
			cx={x}
			cy={y}
			rx="30"
			ry="8"
		/>
	);
}

export default FlyingObjectBase;
