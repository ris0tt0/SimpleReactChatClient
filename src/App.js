import React from 'react';
import './App.css';
import JayChat from './components/jaychat';

const JayChatContainer = () => {

  return <JayChat />
}

function App() {
  return (
    <div className="App">
      <JayChatContainer />
    </div>
  );
}

export default App;
