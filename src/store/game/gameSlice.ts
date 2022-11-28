import { createSlice } from "@reduxjs/toolkit";
import { IGameState, IFlyingObject } from "../../models/models";
import { createInterval, maxFlyingObjects, flyingObjectsStarterYAxis, flyingObjectsStarterPositions } from "../../utils/constants";

const initialState: IGameState = {
	started: false,
	kills: 0,
	lives: 3,
	flyingObjects: [],
	lastObjectCreatedAt: new Date().getTime()
};

const createFlyingObjectsFn = (state : IGameState) => {
	if(!state.started) {
		return
	}
	const now: number = (new Date()).getTime();
	const { lastObjectCreatedAt, flyingObjects } = state;
	const maxTimeFilterFlyingObjects = flyingObjects.filter((object) => (
		(now - object.createdAt) < 400
																								));
	const createNewObject = ( now - lastObjectCreatedAt > createInterval && flyingObjects.length < maxFlyingObjects);

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
	console.log("Reducer hay");
	state.flyingObjects = [...maxTimeFilterFlyingObjects, newFlyingObject];
	state.lastObjectCreatedAt = new Date().getTime();
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
		createFlyingObjects: (state): void => {
			createFlyingObjectsFn(state);
		}
	}
});

export const { startGame, createFlyingObjects } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
