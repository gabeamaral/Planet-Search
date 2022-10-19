import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planetsList } = useContext(StarWarsContext);

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
          {planetsList.map((val) => (
            <tr key={ val.name }>
              <td data-testid="planet-name">{ val.name }</td>
              <td>{ val.rotation_period }</td>
              <td>{ val.orbital_period }</td>
              <td>{ val.diameter }</td>
              <td>{ val.climate }</td>
              <td>{ val.gravity }</td>
              <td>{ val.terrain }</td>
              <td>{ val.surface_water }</td>
              <td>{ val.population }</td>
              <td>{ val.films }</td>
              <td>{ val.created }</td>
              <td>{ val.edited }</td>
              <td>{ val.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
