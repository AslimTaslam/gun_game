import { useState, useEffect } from "react";
import { PointsType } from "../models/models";

export function useDebounce(value: PointsType, delay: number = 300): PointsType {
	const [ debounced, setDebounced ] = useState(value);

	useEffect(() => {
		const inst = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(inst)
	}, [value, delay]);
	return debounced;
}
