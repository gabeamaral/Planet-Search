import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planetsList, planet } = useContext(StarWarsContext);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation_period</th>
            <th>Orbital_period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planetsList.length > 0 && (
            planetsList.filter(
              (val) => val.name.toLowerCase().includes(planet.toLowerCase()),
            )
              .map((val) => (
                <tr data-testid="planets" key={ val.name }>
                  <td>{val.name}</td>
                  <td>{val.climate}</td>
                  <td>{val.diameter}</td>
                  <td>{val.edited}</td>
                  <td>{val.films}</td>
                  <td>{val.gravity}</td>
                  <td>{val.orbital_period}</td>
                  <td>{val.population}</td>
                  <td>{val.rotation_period}</td>
                  <td>{val.surface_water}</td>
                  <td>{val.created}</td>
                  <td>{val.terrain}</td>
                  <td>{val.url}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
