/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Character({ character }) {
  const navigate = useNavigate();
  return (
    <div>
      <CharacterPoster src={character.image} alt={character.name} onClick={() => navigate(`/${character.id}`)} onKeyDown={() => navigate(`/${character.id}`)} />
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Character;

export const CharacterPoster = styled.img`
  box-shadow: 0 0 35px black;
`;