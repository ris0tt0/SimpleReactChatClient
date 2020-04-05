import React from 'react';
import './App.css';
import JayChat from './components/jaychat';
import Logger from 'js-logger';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './api/chatapi';
import { totalChatLogSelector } from './selectors';

const JayChatContainer = () => {
  const dispatch = useDispatch();
  const online = line => dispatch(sendMessage(line));
  const log = useSelector(totalChatLogSelector);

  return <JayChat onLine={online} chatLog={log} />
}

function App() {
  return (
    <div className="App">
      <JayChatContainer />
    </div>
  );
}

export default App;
