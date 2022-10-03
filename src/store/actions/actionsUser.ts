import { UserActionTypes } from '../../types/userTypes';
export const setName = (name: string) => {
  return {
    type: UserActionTypes.SET_NAME,
    payload: name,
  };
};
