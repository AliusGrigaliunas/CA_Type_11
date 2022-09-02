import React from 'react';
import Input from './input';

const buttonStyle = {
  fontSize: 40,
  padding: '10px 20px',
  cursor: 'pointer',
};

const CounterExample = () => {
  //       ↙ - kitamasis naudojimui: atvaizdavimui, arba perdavimui į kitus komponenetus
  const [count, setCount] = React.useState<number>(0);
  //                 ↖               ↖      ↖  - pradinė reikšmė, sukuriama komponento kūrimo metu
  //                   ↖               ↖  - speciali funkcija, naudojama funkciniuose komponentuose,
  //                     ↖               ↖  išlaikyti reikšmei tarp komponento persikrovimų.
  //                       ↖
  //                         ↖ - funkcija, skirta keisti reikšmei ir perkrauti komponentui.
  const [step, setStep] = React.useState<number>(3);

  // TODO: BUTTON + children
  return (
    <div style={{ fontSize: 50, textAlign: 'center', marginTop: '2rem' }}>
      <div>{`Count: ${count}`}</div>
      <Input
        type="number"
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
