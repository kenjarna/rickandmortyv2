import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const fetchCharacterDetails = useCallback(async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const characterDetails = await res.json();
    setCharacter(characterDetails);
  }, [id]);

  useEffect(() => {
    fetchCharacterDetails();
  }, [fetchCharacterDetails, id]);

  return (
    <div>
      {character.id}
    </div>
  );
}

export default CharacterDetail;
