import React from 'react';
import './App.css';
import JayChat from './components/jaychat';
import Logger from 'js-logger';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './api/chatapi';
import { totalChatLogSelector, colorValueSelector } from './selectors';
import { setName } from './actions';

const JayChatContainer = () => {
  const dispatch = useDispatch();
  const online = line => dispatch(sendMessage(line));
  const onColor = color => dispatch(setName(color));
  const log = useSelector(totalChatLogSelector);
  const color = useSelector(colorValueSelector);

  return <JayChat color={color} onLine={online} chatLog={log} onAvatar={onColor} />
}

function App() {
  return (
    <div className="App">
      <JayChatContainer />
    </div>
  );
}

export default App;
