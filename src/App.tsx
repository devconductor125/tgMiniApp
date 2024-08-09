import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="row">
        <button>Search</button>
        <button>Profile</button>
      </div>
      <div className="row">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </div>
      <div className="row">
        <p>Dummy text goes here.</p>
      </div>
      <div className="row">
        <button>Previous Post</button>
        <button>Comments</button>
        <button>Next Post</button>
      </div>
    </div>
  );
}

export default App;