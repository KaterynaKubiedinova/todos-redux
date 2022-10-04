/** @format */

import { UserActionTypes } from '../../types/userTypes';
import { setName } from '../actions/actionsUser';

test('SET_NAME', () => {
  const name: string = 'Kate';

  expect(setName(name)).toEqual({
    type: UserActionTypes.SET_NAME,
    payload: name,
  });
});
