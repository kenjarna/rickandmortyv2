import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">
            <h3>
              {'<'}
              Rick and Morty Baby
              {'>'}
            </h3>
          </Link>
        </header>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<CharacterList />} />
            <Route path="/:id" element={<CharacterDetail />} />
          </Routes>
        </div>
        <footer>
          <p>
            Developed by: Kenny Jarnagin
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
