import React, { useCallback, useEffect, useState } from 'react';

import Character from './Character';

function CharacterList() {
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = useCallback(async () => {
    // eslint-disable-next-line
     const res = await fetch('https://rickandmortyapi.com/api/character');
    const characterList = await res.json();
    setCharacters(characterList.results);
  }, []);

  useEffect(() => {
    fetchCharacters().catch(console.error);
  }, [fetchCharacters]);

  return (
    <div>
      {characters.map((character) => <Character key={character.id} character={character} />)}
    </div>
  );
}

export default CharacterList;
