/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Character({ character }) {
  const navigate = useNavigate();
  return (
    <div>
      <img src={character.image} alt={character.name} onClick={() => navigate(`/${character.id}`, { replace: true })} />
      {character.name}
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
