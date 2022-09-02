import React from 'react';

const buttonStyle = {
  fontSize: 40,
  padding: '10px 20px',
  cursor: 'pointer',
};

const CounterExample = () => {
  //       ↙ - kitamasis naudojimui: atvaizdavimui, arba perdavimui į kitus komponenetus
  const [count, setCount] = React.useState(0);
  //                 ↖               ↖      ↖  - pradinė reikšmė, sukuriama komponento kūrimo metu
  //                   ↖               ↖  - speciali funkcija, naudojama funkciniuose komponentuose,
  //                     ↖               ↖  išlaikyti reikšmei tarp komponento persikrovimų.
  //                       ↖
  //                         ↖ - funkcija, skirta keisti reikšmei ir perkrauti komponentui.
  const [step, setStep] = React.useState(3);

  return (
    <div style={{ fontSize: 50, textAlign: 'center', marginTop: '2rem' }}>
      <div>{`Count: ${count}`}</div>
      <input
        type="number"
        style={{ fontSize: 40, width: 140, textAlign: 'center' }}
        value={step}
        onChange={(e) => setStep(e.target.valueAsNumber)}
      />
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 20, marginTop: '1rem',
      }}
      >
        <button
          type="button"
          style={buttonStyle}
          //                ↙ - kviečiama state keitimo funkcija, perduodant naują reikšmę
          onClick={() => setCount(count - step)}
        >
          Mazinti
        </button>
        <button
          type="button"
          style={buttonStyle}
          //                ↙ - kviečiama state keitimo funkcija, perduodant naują reikšmę
          onClick={() => setCount(count + step)}
        >
          Didinti
        </button>
      </div>
    </div>
  );
};

export default CounterExample;
