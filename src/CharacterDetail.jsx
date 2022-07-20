import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  // eslint-disable-next-line no-unused-vars
  const [character, setCharacter] = useState({});
  // eslint-disable-next-line prefer-const
  let { id } = useParams();

  const fetchCharacterDetails = useCallback(async () => {
    // eslint-disable-next-line
     const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const characterDetails = await res.json();
    setCharacter(characterDetails);
  }, [id]);

  useEffect(() => {
    fetchCharacterDetails().catch(console.error);
  }, [fetchCharacterDetails, id]);

  return (
    <div>
      {character.id}
    </div>
  );
}

export default CharacterDetail;
