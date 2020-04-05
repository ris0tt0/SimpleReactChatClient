import Logger from "js-logger";

/**
 * Returns an object that contains the color and copy text.
 * 
 * @param {string} line raw line from the server.
 */
export const parseLine = line => 
	({
		color:line.slice(0,7),
		copy:line.slice(7)
	})