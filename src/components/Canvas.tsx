import { useEffect, MouseEvent } from "react";
import { gameHeight } from "../utils/constants";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import CannonBall from "./CannonBall";
import CurrentScore from "./CurrentScore";
import FlyingObject from "./FlyingObject";
import Heart from "./Heart";
import StartGame from "./StartGame";
import Title from "./Title";

import { IGameState } from "../models/models";

const Canvas = ({
	angle,
	trackMouse,
	gameState,
	startGame,
}: {
	angle: number;
	trackMouse: any;
	gameState: IGameState;
	startGame: any;
}) => {
	const viewBox: string = `${window.innerWidth / -2}, ${100 - gameHeight}, ${
		window.innerWidth
	}, ${window.innerHeight}`;
	
	const { started } = gameState;

	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			viewBox={viewBox}
			onMouseMove={trackMouse}
		>
			<defs>
				<filter id="shadow">
					<feDropShadow dx="1" dy="1" stdDeviation="2" />
				</filter>
			</defs>
			<Sky />
			<Ground />
			<CannonPipe rotation={angle} />
			<CannonBase />
			<CannonBall position={{ x: 0, y: -80 }} />
			<CurrentScore score={15} position={{ x: 100, y: 80 }} />
			<Heart position={{ x: -150, y: 50 }} />
			{started && (
				<g>
					<FlyingObject position={{ x: 120, y: -350 }} />
					<FlyingObject position={{ x: -120, y: -350 }} />
				</g>
			)}
			{!started && (
				<g>
					<StartGame onClick={() => startGame()} />
					<Title />
				</g>
			)}
		</svg>
	);
};

export default Canvas;
