export interface PointsType {
	x: number,
	y: number
};

export interface EventPointsType {
	clientX: number,
	clientY: number
};

export interface IFlyingObject {
	position: PointsType,
	createdAt: number,
	id: number
};

export interface IGameState {
	started: boolean,
	kills: number,
	lives: number,
	flyingObjects: IFlyingObject[] | [],
	lastObjectCreatedAt: Date
};

