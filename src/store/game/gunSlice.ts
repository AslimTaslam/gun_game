import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateAngle } from "../../utils/formula";
import { PointsType } from "../../models/models";

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
			const mousePosition = action.payload || {x: 0, y: 0 };
			const { x, y } = mousePosition;
			const angle = calculateAngle(0, 0, x, y);
			state.angle = angle;
		}
	}
});

export const { moveObjects } = gunObjectSlice.actions;

export const gunObjectReducer = gunObjectSlice.reducer;
