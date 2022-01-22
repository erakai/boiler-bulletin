import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import { writePost, retrieveAllPosts, retrieveRealTimePosts } from '../utils/FirebaseManager.js'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={() => {
        retrieveRealTimePosts(setPosts)
        console.log(posts)
      }}>Send Data</button>
    </div>
  );
}

export default App;
