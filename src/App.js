import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Form />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
