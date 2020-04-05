import { createSelector } from "reselect";

const chatlogSelector = state => state.chatlog;

export const totalChatLogSelector = createSelector(chatlogSelector,chatlog => chatlog.concat().reverse());
