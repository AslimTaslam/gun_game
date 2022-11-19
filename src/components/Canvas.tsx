import {useEffect, MouseEvent} from "react";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import CannonBall from "./CannonBall";

const Canvas = ({angle, trackMouse}: {angle: number, trackMouse: any}) => {
	const viewBox: string = `${window.innerWidth / -2}, ${100 - window.innerHeight}, ${window.innerWidth}, ${window.innerHeight}`;

	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			viewBox={viewBox}
			onMouseMove={trackMouse}
		>
			<Sky/>
			<Ground/>
			<CannonPipe rotation={angle}/>
			<CannonBase/>
			<CannonBall position={{x: 0, y: -100}}/>
		</svg>
	);
}

export default Canvas;
