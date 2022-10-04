import { UserAction, UserActionTypes, UserState } from '../../types/userTypes';

export const initialState: UserState = {
  name: '',
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
