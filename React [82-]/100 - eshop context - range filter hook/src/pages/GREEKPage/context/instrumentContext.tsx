import React from 'react';
import InstrumentService, { Instruments } from 'services/instruments-service';

type InstrumentContextValue = {
    instruments:Instruments[],
};

const InstrumentContext = React.createContext<InstrumentContextValue>({} as InstrumentContextValue);

export const InstrumentContextProvider:React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [instruments, setInstruments] = React.useState<Instruments[]>([]);

  const InstrumentContextValue = React.useMemo(() => ({
    instruments,
  }), [instruments]);

    React.useEffect(() => {
        (async () => {
            const fetchedInstruments = await InstrumentService.fetchInstruments();

            setInstruments(fetchedInstruments);
        })();
    }, []);

  return (
    <InstrumentContext.Provider value={InstrumentContextValue}>
      {' '}
      {children}
      {' '}
    </InstrumentContext.Provider>
);
  };

export default InstrumentContext;
