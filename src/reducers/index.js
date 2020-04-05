import { combineReducers } from "redux";
import { SET_MY_COUNTER } from "../actions/actiontypes";

function myCounter(state=0,action){
	switch(action.type){
		case SET_MY_COUNTER:
			return action.payload;
		default:
			return state;
	}
};

const rootReducers = combineReducers({
	myCounter,
})

export default rootReducers;
