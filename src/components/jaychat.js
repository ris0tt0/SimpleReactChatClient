import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './jaychat.css';
import { parseLine } from '../util';
import Logger from 'js-logger';

const JayChatLogItem = ({line,color}) => {

	Logger.info(`jaychatlogitem: ${line} ${color}`)
	return (
		<div className='jaychatlogitem'>
			<div style={{background:color}} />
			<p>{line}</p>
		</div>
	)
}
function JayChat({chatLog,onLine}) {

	const [line,setLine] = useState('');
	const onKeyCode = e => {
		if(e.keyCode === 13){
			onLine(line);
			setLine('');
		}
	};

	const log = chatLog.map((rawline,index) =>{
		const {color,copy} = parseLine(rawline);

		return (
			<JayChatLogItem key={`_${index}`} color={color} line={copy} />
		)
	})

	return (
		<div className='jaychat-container'>
			<div className='jaychat-log'>
				{log}
			</div>
			<input type='text' value={line} onChange={e=>setLine(e.target.value)} onKeyUp={onKeyCode} />
		</div>
	)
}

JayChat.propTypes = {

}

export default JayChat

