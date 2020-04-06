import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SliderPicker } from 'react-color'

import './jaychat.css';
import { parseLine } from '../util';
import Logger from 'js-logger';

const JayChatLogItem = ({line,color}) => {

	return (
		<div className='jaychatlogitem'>
			<div style={{background:color}} />
			<p>{line}</p>
		</div>
	)
}
function JayChat({chatLog,onLine,onAvatar,color}) {

	const [line,setLine] = useState('');

	const onKeyCode = e => {
		if(e.keyCode === 13 && line.trim().length > 0){
			onLine(line);
			setLine('');
		}
	};

	const log = chatLog.map((rawline,index) =>{
		//TODO: move out of components and put into selectors
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
			<div style={{background:color}} className='jaychat-control'>
				<input type='text' value={line} onChange={e=>setLine(e.target.value)} onKeyUp={onKeyCode} />
			</div>
			<div className='jaychat-color'>
				<SliderPicker color={color} onChange={({hex}) => onAvatar(hex)} />
			</div>
		</div>
	)
}

JayChat.propTypes = {

}

export default JayChat

