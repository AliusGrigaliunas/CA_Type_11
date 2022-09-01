import React from 'react';

const buttonStyle = {
  fontSize: 40,
  padding: '10px 20px',
  cursor: 'pointer',
};

// TODO: Sukurti įvesties lauką, kuriame bus įvedamas skaičius. Tuomet tas skaičius bus naudojamas
// TODO: padidinti arba sumažinti 'count' reikšmę.

const CounterExample = () => {
  //       ↙ - kitamasis naudojimui: atvaizdavimui, arba perdavimui į kitus komponenetus
  const [count, setCount] = React.useState(0);
  //                 ↖               ↖      ↖  - pradinė reikšmė, sukuriama komponento kūrimo metu
  //                   ↖               ↖  - speciali funkcija, naudojama funkciniuose komponentuose,
  //                     ↖               ↖  išlaikyti reikšmei tarp komponento persikrovimų.
  //                       ↖
  //                         ↖ - funkcija, skirta keisti reikšmei ir perkrauti komponentui.

  return (
    <div style={{ fontSize: 50, textAlign: 'center', marginTop: '2rem' }}>
      <div>{`Count: ${count}`}</div>
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 20, marginTop: '1rem',
      }}
      >
        <button
          type="button"
          style={buttonStyle}
          //                ↙ - kviečiama state keitimo funkcija, perduodant naują reikšmę
          onClick={() => setCount(count + 1)}
        >
          Didinti
        </button>
        <button
          type="button"
          style={buttonStyle}
          //                ↙ - kviečiama state keitimo funkcija, perduodant naują reikšmę
          onClick={() => setCount(count - 1)}
        >
          Mazinti
        </button>
      </div>
    </div>
  );
};

export default CounterExample;
