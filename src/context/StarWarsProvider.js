import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const options = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];

function StarWarsProvider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [planet, setPlanet] = useState('');
  const [column, setColumn] = useState('population');
  const [quantity, setQuantity] = useState(0);
  const [quantityForm, setQuantityForm] = useState('maior que');
  const [filtersNumerics, setNumerics] = useState([]);
  const [optionsNumerics, setOptionsNumerics] = useState(options);

  const columns = ({ target: { value } }) => {
    setColumn(value);
  };

  const getQuantity = ({ target: { value } }) => {
    setQuantity(value);
  };

  const getQuantitys = ({ target: { value } }) => {
    setQuantityForm(value);
  };

  const Filters = () => {
    if (quantityForm === 'maior que') {
      const data = planetsList.filter((event) => +event[column] > +quantity);
      setPlanetsList(data);
    }

    if (quantityForm === 'menor que') {
      const data = planetsList.filter((event) => +event[column] < +quantity);
      setPlanetsList(data);
    }

    if (quantityForm === 'igual A') {
      const data = planetsList.filter((event) => +event[column] === +quantity);
      setPlanetsList(data);
    }

    setNumerics([...filtersNumerics,
      { column, comparison: quantityForm, value: quantity }]);
    const filter = optionsNumerics.filter((e) => e !== column);
    setOptionsNumerics(filter);
    setColumn(filter[0]);
  };

  useEffect(() => {
    const getData = async () => {
      const endpoint = await fetch('https://swapi.dev/api/planets');
      const { results } = await endpoint.json();
      const data = results.map(
        ({
          name,
          climate,
          created,
          diameter,
          edited,
          films,
          gravity,
          orbital_period: orbital,
          population,
          rotation_period: rotation,
          surface_water: surface,
          terrain,
          url,
        }) => ({
          name,
          rotation_period: rotation,
          surface_water: surface,
          terrain,
          url,
          edited,
          films,
          climate,
          diameter,
          created,
          gravity,
          orbital_period: orbital,
          population,
        }),
      );
      setPlanetsList(data);
    };
    getData();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setPlanet(value);
  };

  const planets = useMemo(() => ({
    planetsList,
    planet,
    handleChange,
    column,
    columns,
    quantity,
    quantityForm,
    getQuantity,
    getQuantitys,
    Filters,
    filtersNumerics,
    optionsNumerics,
  }), [planetsList, planet, column, quantity, quantityForm, filtersNumerics]);

  return (
    <StarWarsContext.Provider value={ planets }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StarWarsProvider;
