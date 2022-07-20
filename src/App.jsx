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
            <p>
              {'<'}
              Rick and Morty Baby
              {'>'}
            </p>
          </Link>
        </header>
        <Routes>
          <Route exact path="/" element={<CharacterList />} />
          <Route path="/:id" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
