import { combineReducers } from "redux";
import { UPDATE_CHAT_LOG, SET_NAME } from "../actions/actiontypes";
import Logger from "js-logger";

function name(state='#40b2bf',action){
	
	switch (action.type) {
		case SET_NAME:
			return action.payload;
		default:
			return state;
	}
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
