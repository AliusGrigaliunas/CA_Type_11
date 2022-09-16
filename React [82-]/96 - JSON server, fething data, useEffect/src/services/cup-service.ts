import config from 'config';

const { serverAddress } = config;
const collectionName = 'cups';

const fetchMany = async () => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedCups = await response.json();

  return fetchedCups;
};

const CupService = {
  fetchMany,
};

export default CupService;
