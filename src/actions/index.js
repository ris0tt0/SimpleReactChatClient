import { UPDATE_CHAT_LOG, SET_NAME } from "./actiontypes";

export const setName = payload => ({type:SET_NAME,payload});
export const updateChatLog = payload => ({type:UPDATE_CHAT_LOG,payload});