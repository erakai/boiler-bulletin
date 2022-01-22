import PostSystem from './PostSystem';
import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <PostSystem name="get money $$"/>
      </header>
    </div>
  );
}

export default App;
