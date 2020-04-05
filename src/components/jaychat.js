import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './jaychat.css';

function JayChat(props) {

	const [line,setLine] = useState('add default');

	return (
		<div className='jaychat-container'>
			<div className='jaychat-log'> log</div>
			<input type='text' value={line} onChange={e=>setLine(e.target.value)} />
		</div>
	)
}

JayChat.propTypes = {

}

export default JayChat

