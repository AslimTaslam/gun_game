import { PointsType } from "../models/models";

const CurrentScore = ({score, position}: {score: number, position: PointsType}) => {
	const { x, y } = position;
	const scoreStyle = {
		fontFamily: '"Joti One", cursive',
		fontSize: 50,
		fill:" #d6d33e"
	};

	return (
		<g filter="url(#shadow)">
			<text
				style={scoreStyle}
				x={x}
				y={y}
			>
				{score}
			</text>
		</g>
	);
}

export default CurrentScore;
