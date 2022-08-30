import * as React from 'react';
import Button from './components/button';

const App: React.FC = () => {

  return (
    <main>
      <h1>Mano pirmoji aplikacija</h1>
      <Button>mygtukas</Button>
      <Button color="primary">primary mygtukas</Button>
      <Button color="secondary">secondary mygtukas</Button>
      <Button color="error">error mygtukas</Button>
      <Button color="warning">warning mygtukas</Button>
    </main>
  );
}

export default App;
