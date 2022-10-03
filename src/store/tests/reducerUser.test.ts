import { UserActionTypes, UserAction } from '../../types/userTypes';
import { userReducer, initialState } from '../reducers/userReducer';

test('SET_NAME', () => {
	const action: UserAction = {
		type: UserActionTypes.SET_NAME,
		payload: 'Kate'
	}

	expect(userReducer(initialState, action)).toEqual({
		name: 'Kate'
	});
})