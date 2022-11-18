import {useEffect} from "react";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";

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
		</svg>
	);
}

export default Canvas;
