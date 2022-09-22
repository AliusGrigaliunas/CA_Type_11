import config from 'config';

const { serverAddress } = config;
const collectionName = 'cups';

const fetchMany = async (): Promise<Cup[]> => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedCups = await response.json();

  return fetchedCups as Cup[];
};

const fetchPriceRange = async (): Promise<NumberRange> => {
  // TODO: Ateityje duomenų formavimas ir skaičiacimai turėtų būti atliekami
  // TODO: serverio pusėje
  const sortedPrices = (await fetchMany())
    .map((cup) => cup.price)
    .sort((x, y) => x - y);

  return [sortedPrices[0], sortedPrices[sortedPrices.length - 1]];
};

const CupService = {
  fetchMany,
  fetchPriceRange,
};

export default CupService;
