import * as React from 'react';
import Button from './components/button';
import TextField from './components/text-field';

const App: React.FC = () => {

  return (
    <main>
      <h1>Mano pirmoji aplikacija</h1>
      <Button>Pirmas mygtukas</Button>
      <Button>Antras mygtukas</Button>
      <Button>Trečias mygtukas</Button>
      <TextField />
    </main>
  );
}

export default App;
