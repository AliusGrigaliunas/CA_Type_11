import * as React from 'react';
import Button from './components/button';

const App: React.FC = () => {

  return (
    <main>
      <h1>Mano pirmoji aplikacija</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button>mygtukas</Button>
        <Button color="primary">primary mygtukas</Button>
        <Button color="secondary">secondary mygtukas</Button>
        <Button color="error">error mygtukas</Button>
        <Button color="warning">warning mygtukas</Button>
      </div>
    </main>
  );
}

export default App;
