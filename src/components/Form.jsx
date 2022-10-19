import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { planet, handleClick } = useContext(StarWarsContext);
  return (
    <main>
      <input
        type="text"
        data-testid="name-filter"
        value={ planet }
        onChange={ handleClick }
      />
    </main>
  );
}

export default Form;
