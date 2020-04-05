import { combineReducers } from "redux";
import { UPDATE_CHAT_LOG } from "../actions/actiontypes";

function name(state='#555555',action){
	return state;
}

function chatlog(state=[],action){
	
	switch(action.type){
		case UPDATE_CHAT_LOG:
			return [...state,action.payload];
		default:
			return state;
	}
}


const rootReducers = combineReducers({
	chatlog,
	name,
})

export default rootReducers;
