import { createSelector } from "reselect";

const chatlogSelector = state => state.chatlog;
const nameSelector = state => state.name;

export const totalChatLogSelector = createSelector(chatlogSelector,chatlog => chatlog.concat().reverse());
export const colorValueSelector = createSelector(nameSelector,name => name);