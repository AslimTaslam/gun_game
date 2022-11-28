import styled, { keyframes } from "styled-components";
import FlyingObjectBase from "./FlyingObjectBase";
import FlyingObjectTop from "./FlyingObjectTop";
import { PointsType } from "../models/models";
import { gameHeight } from "../utils/constants";

const moveVertically = keyframes`
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(${gameHeight}px);
	}
`;

const Move = styled.g`
	animation: ${moveVertically} 4s linear;
`;

const FlyingObject = ({position}: {position: PointsType}) => {
	return (
		<Move>
			<FlyingObjectBase position={position} />
			<FlyingObjectTop position={position} />
		</Move>
	);
}

export default FlyingObject;
