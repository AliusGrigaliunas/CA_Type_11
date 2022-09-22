import config from 'config';

const { serverAddress } = config;
const collectionName = 'cups';

const fetchMany = async (urlParams?: string): Promise<Cup[]> => {
  let url = `${serverAddress}/${collectionName}`;
  if (urlParams) url += `?${urlParams}`;

  const response = await fetch(url);
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
