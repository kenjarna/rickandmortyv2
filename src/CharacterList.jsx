import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

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
    <CharacterGrid>
      {characters.map((character) => <Character key={character.id} character={character} />)}
    </CharacterGrid>
  );
}

export default CharacterList;

const CharacterGrid = styled.div`
  background-color: white;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;

  // Tablet breakpoint
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  //Mobile breakpoint
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  //Small screen breakpoint
  @media screen and (min-width: 1024px) and (max-width: 1324px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1324px) and (max-width: 1624px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
