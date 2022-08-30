import * as React from 'react';
import Button from './components/button';

const App: React.FC = () => {

  return (
    <main>
      <h1>Mano pirmoji aplikacija</h1>
      <Button>Pirmas mygtukas</Button>
      <Button>Antras mygtukas</Button>
      <Button>Trečias mygtukas</Button>
    </main>
  );
}

export default App;
