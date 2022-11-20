import {useEffect, MouseEvent} from "react";
import {gameHeight} from "../utils/constants";
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

const Canvas = ({angle, trackMouse}: {angle: number, trackMouse: any}) => {
	const viewBox: string = `${window.innerWidth / -2}, ${100 - gameHeight}, ${window.innerWidth}, ${window.innerHeight}`;

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
			<Sky/>
			<Ground/>
			<CannonPipe rotation={angle}/>
			<CannonBase/>
			<CannonBall position={{x: 0, y: -80}}/>
			<CurrentScore score={15} position={{x: 100, y: 80}}/>
			<Heart position={{x: -150, y: 50}}/>
			<FlyingObject position={{x: 120, y: -350}}/>
			<FlyingObject position={{x: -120, y: -350}}/>
			<StartGame onClick={(): void => console.log("Aliens go home")}/>
			<Title/>
		</svg>
	);
}

export default Canvas;
