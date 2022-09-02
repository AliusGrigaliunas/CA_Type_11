import React from 'react';
import Input from './input';
import Button from './button';

const CounterExample = () => {
  //       ↙ - kitamasis naudojimui: atvaizdavimui, arba perdavimui į kitus komponenetus
  const [count, setCount] = React.useState<number>(0);
  //                 ↖               ↖      ↖  - pradinė reikšmė, sukuriama komponento kūrimo metu
  //                   ↖               ↖  - speciali funkcija, naudojama funkciniuose komponentuose,
  //                     ↖               ↖  išlaikyti reikšmei tarp komponento persikrovimų.
  //                       ↖
  //                         ↖ - funkcija, skirta keisti reikšmei ir perkrauti komponentui.
  const [step, setStep] = React.useState<number>(3);

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
        <Button onClick={() => setCount(count - step)}>Mazinti</Button>
        <Button onClick={() => setCount(count + step)}>Didinti</Button>
      </div>
    </div>
  );
};

export default CounterExample;
