import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";

const Canvas = () => {
	const viewBox: string = `${window.innerWidth / -2}, ${100 - window.innerHeight}, ${window.innerWidth}, ${window.innerHeight}`;

	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			viewBox={viewBox}
		>
			<Sky/>
			<Ground/>
			<CannonPipe rotation={35}/>
			<CannonBase/>
		</svg>
	);
}

export default Canvas;
