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
    optionsNumerics,
  } = useContext(StarWarsContext);

  return (
    <main>
      <input
        type="text"
        placeholder="planetas"
        data-testid="name-filter"
        value={ planet }
        onChange={ handleChange }
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ columns }
      >
        {optionsNumerics.map((event) => (
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
