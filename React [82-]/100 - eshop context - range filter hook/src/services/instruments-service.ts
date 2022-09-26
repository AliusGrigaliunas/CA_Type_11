import config from 'config';

const { serverAddress } = config;
const collectionName = 'Instruments';

export type Instruments = {
    id:number,
    price:number,
    title:string,
    categoryId:number,
    description:string,
};

const fetchInstruments = async (): Promise<Instruments[]> => {
  const url = `${serverAddress}/${collectionName}`;

  const response = await fetch(url);
  const fetchedInstruments = await response.json();

  return fetchedInstruments as Instruments[];
};

const InstrumentService = {
  fetchInstruments,
};

export default InstrumentService;
