export interface UserState {
  name: string;
}

export enum UserActionTypes {
  SET_NAME = 'SET_NAME',
}

interface SetNameAction {
  type: UserActionTypes.SET_NAME;
  payload: string;
}

export type UserAction = SetNameAction;
