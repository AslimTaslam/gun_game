import React, { useEffect, useState, MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from "./hooks/rtkHooks";
import Canvas from "./components/Canvas";
import { getCanvasPosition } from "./utils/formula";
import { moveObjects } from "./store/game/gunSlice";
import { useDebounce } from "./hooks/debounce";

const App = () => {
	const { angle } = useAppSelector((state) => state.gunObject);
	const dispatch = useAppDispatch();
	const [positionMouse, setPositionMouse] = useState({x: 1, y: -258})
	const debounced = useDebounce(positionMouse);

	const trackMouse = (event: MouseEvent) => {
		const position = getCanvasPosition(event);
		setPositionMouse(position);		
	}

	useEffect(() => {
		if(debounced) {
			dispatch(moveObjects(debounced));
		}
	}, [debounced]);

  return (
		<Canvas
			trackMouse={(event: MouseEvent) => trackMouse(event)}
			angle={angle}
		/>
  );
}

export default App;
