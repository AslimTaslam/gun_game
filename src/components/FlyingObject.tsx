import FlyingObjectBase from "./FlyingObjectBase";
import FlyingObjectTop from "./FlyingObjectTop";
import { PointsType } from "../models/models";

const FlyingObject = ({position}: {position: PointsType}) => {
	return (
		<g>
			<FlyingObjectBase position={position} />
			<FlyingObjectTop position={position} />
		</g>
	);
}

export default FlyingObject;
