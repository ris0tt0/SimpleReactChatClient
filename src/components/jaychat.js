import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './jaychat.css';

const JayChatLogItem = ({line,color}) => {
	return (
		<div className='jaychatlogitem'>
			<div style={{background:color}} />
			<p>{line}</p>
		</div>
	)
}
function JayChat({onLine}) {

	const [line,setLine] = useState('');
	const onKeyCode = e => {
		if(e.keyCode === 13){
			onLine(line);
			setLine('');
		}
	}

	return (
		<div className='jaychat-container'>
			<div className='jaychat-log'>
				<JayChatLogItem color='#00FF00' line='Hello, how are you?' />
			</div>
			<input type='text' value={line} onChange={e=>setLine(e.target.value)} onKeyUp={onKeyCode} />
		</div>
	)
}

JayChat.propTypes = {

}

export default JayChat

