import React, { useCallback, useEffect, useState } from 'react';

import Character from './Character';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = useCallback(async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characterList = await res.json();
    setCharacters(characterList.results);
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div>
      {characters.map((character) => <Character key={character.id} character={character} />)}
    </div>
  );
}

export default CharacterList;
