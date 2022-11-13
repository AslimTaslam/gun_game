import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface GunObjectState {
	mousePosition: number[]
};

const initialState: GunObjectState = {
	mousePosition: []
};

export const gunObjectSlice = createSlice({
	name: "gunObject",
	initialState,
	reducers: {
		moveObjects: (state, action: PayloadAction<number[]>) => {
			state.mousePosition = action.payload;
		}
	}
});

export const { moveObjects } = gunObjectSlice.actions;

export const gunObjectReducer = gunObjectSlice.reducer;
