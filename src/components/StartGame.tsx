import { gameWidth } from "../utils/constants";

const StartGame = ({onClick}: {onClick: () => void}) => {
	const text = {
		textAnchor: "middle",
		x: 0,
		y: -150,
		style: {
			fontFamily: "'Joti One', cursive",
			fontSize: 50,
			fill: "#e3e3e3",
			cursor: "pointer"
		},
		onClick: onClick
	};

	const button = {
		x: gameWidth / -2,
		y: -280,
		width: gameWidth,
		height: 200,
		rx: 10,
		ry:	10,
		style: {
			fill: "transparent",
			cursor: "pointer"
		},
		onClick: onClick
	};

	return (
		<g filter="url(#shadow)">
			<rect {...button}/>
			<text {...text}>
				Tap to start!
			</text>
		</g>
	);
}

export default StartGame;
