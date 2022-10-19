import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const {
    planet,
    handleChange,
    quantity,
    quantityForm,
    getQuantity,
    getQuantitys,
    column,
    columns,
    Filters,
  } = useContext(StarWarsContext);

  return (
    <main>
      <input
        type="text"
        data-testid="name-filter"
        value={ planet }
        onChange={ handleChange }
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ columns }
      >
        {[
          'population',
          'orbital_period',
          'diameter',
          'rotation_period',
          'surface_water',
        ].map((event) => (
          <option key={ event } value={ event }>
            {event}
          </option>
        ))}
      </select>

      <select
        value={ quantityForm }
        onChange={ getQuantitys }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual A">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ quantity }
        onChange={ getQuantity }
      />

      <button type="button" data-testid="button-filter" onClick={ Filters }>
        Adicionar Filtro
      </button>
    </main>
  );
}

export default Form;
