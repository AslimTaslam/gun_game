import React, { useEffect, useState, MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "./hooks/rtkHooks";
import Canvas from "./components/Canvas";
import { getCanvasPosition } from "./utils/formula";
import { moveObjects } from "./store/game/gunSlice";
import { useDebounce } from "./hooks/debounce";

const App = () => {
	const { angle } = useAppSelector((state) => state.gunObject);
	const dispatch = useAppDispatch();
	const [positionMouse, setPositionMouse] = useState({ x: 1, y: -258 });
	const debounced = useDebounce(positionMouse);

	const trackMouse = (event: MouseEvent) => {
		const position = getCanvasPosition(event);
		setPositionMouse(position);
	};

	const windowResize = (): void => {
		const cnv: any = document.getElementById("aliens-go-home-canvas");
		console.log(cnv);
		cnv.style.width = `${window.innerWidth}px`;
		cnv.style.height = `${window.innerHeight}px`;
	};

	useEffect(() => {
		if (debounced) {
			dispatch(moveObjects(debounced));
		}
	}, [debounced]);

	useEffect(() => {
		windowResize();
	}, [window]);

	return (
		<Canvas
			trackMouse={(event: MouseEvent) => trackMouse(event)}
			angle={angle}
		/>
	);
};

export default App;
