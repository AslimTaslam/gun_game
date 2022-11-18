import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { calculateAngle } from "../../utils/formula";

type PointsType = {
	x: number,
	y: number
};

interface GunObjectState {
	angle: number
};

const initialState: GunObjectState = {
	angle: 35
};

export const gunObjectSlice = createSlice({
	name: "gunObject",
	initialState,
	reducers: {
		moveObjects: (state, action: PayloadAction<PointsType>) => {
			if(!action.payload) return state;
			const { x, y } = action.payload;
			const angle = calculateAngle(0, 0, x, y);
			state.angle = angle;
		}
	}
});

export const { moveObjects } = gunObjectSlice.actions;

export const gunObjectReducer = gunObjectSlice.reducer;
