import { useState, useEffect } from "react";

interface Ixy {
	x: number,
	y: number
}

export function useDebounce(value: Ixy, delay: number = 300): Ixy {
	const [ debounced, setDebounced ] = useState(value);

	useEffect(() => {
		const inst = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(inst)
	}, [value, delay]);
	return debounced;
}
