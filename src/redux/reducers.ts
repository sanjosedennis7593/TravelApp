import { combineReducers } from 'redux';
import user from './user/reducer';

const rootReducers = combineReducers({
    user
});

// const rootReducer = (state:any, action:any) => {
// 	switch (action.type) {
// 		default:
// 			return rootReducers(state, action);
// 	}
// };

export default rootReducers;