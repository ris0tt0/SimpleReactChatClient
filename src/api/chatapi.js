import { COMPLETE_MESSAGE, SENDING_MESSAGE, ERROR_MESSAGE } from "../actions/actiontypes";
import io from "socket.io-client";
import Logger from "js-logger";

const socket = io('http://localhost:3000/');

export const sendingMessage = () => ({type:SENDING_MESSAGE});
export const completeMessage = () => ({type:COMPLETE_MESSAGE});
export const errorMessage = payload => ({type:ERROR_MESSAGE,payload});

export const sendMessage = message => (dispatch,getState) => {
	const state = getState();

	dispatch(sendingMessage());
	try{
		socket.emit('message',`${state.name} ${message}`);
		dispatch(completeMessage());
	}catch(e){
		dispatch(errorMessage(e));
	}
}
