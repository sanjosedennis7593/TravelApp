import { combineReducers } from 'redux';

import event from './event/reducer';
import user from './user/reducer';

const rootReducers = combineReducers({
    event,
    user
});

// const rootReducer = (state:any, action:any) => {
// 	switch (action.type) {
// 		default:
// 			return rootReducers(state, action);
// 	}
// };

export default rootReducers;