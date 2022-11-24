import { createSlice } from "@reduxjs/toolkit";
import { IGameState, IFlyingObject } from "../../models/models";
import { createInterval, maxFlyingObjects, flyingObjectsStarterYAxis, flyingObjectsStarterPositions } from "../../utils/constants";

const initialState: IGameState = {
	started: false,
	kills: 0,
	lives: 3,
	flyingObjects: [],
	lastObjectCreatedAt: new Date()
};

const createFlyingObjects = (state : IGameState) => {
	if(!state.started) {
		return
	}
	const now: number = (new Date()).getTime();
	const { lastObjectCreatedAt, flyingObjects } = state;
	const createNewObject = ( now - lastObjectCreatedAt.getTime() > createInterval && flyingObjects.length < maxFlyingObjects);

	if(!createNewObject) {
		return
	}
	const id: number = (new Date()).getTime();
	const predefinedPosition: number = Math.floor(Math.random() * maxFlyingObjects);
	const flyingObjectPosition: number = flyingObjectsStarterPositions[predefinedPosition];
	const newFlyingObject: IFlyingObject = {
		position: {
			x: flyingObjectPosition,
			y: flyingObjectsStarterYAxis
		},
		createdAt: (new Date()).getTime(),
		id: id
	};
	state.flyingObjects = [...state.flyingObjects, newFlyingObject];
	state.lastObjectCreatedAt = new Date();
}

export const gameSlice = createSlice({
	name: "gameSlice",
	initialState,
	reducers: {
		startGame: (state): void => {
			state.started = true;
			state.kills = 0;
			state.lives = 3;

		},
		createFlyingObjects
	}
});

export const { startGame } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
