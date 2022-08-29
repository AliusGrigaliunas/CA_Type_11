import React from 'react';
import logo from './logo.svg';
import './App.css';
import ManoParagrafas from './mano-paragrafas';

// <ManoParagrafas content="Pirmas paragrafas" author="Jalamonis Kirpaila" />
// ManoParagrafas({
//   content: "Pirmas paragrafas",
//   author: "Jalamonis Kirpaila"
// })

function App() {
  const title = 'Mano pirma aplikacija'
  const linkText = 'Išmok React!';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title}</p>
        <ManoParagrafas content="Pirmas paragrafas" author="Jalamonis Kirpaila" />
        <ManoParagrafas content="Antras paragrafas" />
        <ManoParagrafas content="Trečias paragrafas" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText} aaaa
        </a>
      </header>
    </div>
  );
}

export default App;
