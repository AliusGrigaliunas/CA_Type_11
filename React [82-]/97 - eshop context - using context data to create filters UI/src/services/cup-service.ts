import config from 'config';

const { serverAddress } = config;
const collectionName = 'cups';

const fetchMany = async (): Promise<Cup[]> => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedCups = await response.json();

  return fetchedCups as Cup[];
};

const CupService = {
  fetchMany,
};

export default CupService;
