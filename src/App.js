import React from 'react';
import './App.css';
import JayChat from './components/jaychat';
import Logger from 'js-logger';

const JayChatContainer = () => {
  const online = line => Logger.info(line);

  return <JayChat onLine={online} />
}

function App() {
  return (
    <div className="App">
      <JayChatContainer />
    </div>
  );
}

export default App;
