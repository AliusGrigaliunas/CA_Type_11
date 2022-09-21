import * as React from 'react';
import { CheckboxOption } from 'components/form-controls/checkbox-group';

type CheckboxFilterOptions = {
  urlParamName?: string
  fetchOptions: () => Promise<CheckboxOption[]>
};

type UseCheckboxFilter = (props: CheckboxFilterOptions) => [
  CheckboxOption[],
  (newSelectedOptions: CheckboxOption[]) => void,
  CheckboxOption[],
];

const useCheckboxFilter: UseCheckboxFilter = ({ urlParamName, fetchOptions }) => {
  const [options, setOptions] = React.useState<CheckboxOption[]>([]);
  const [selectedOptions, setSelectedOptions] = React.useState<CheckboxOption[]>([]);

  const initializeOptions = async () => {
    const fetchedOptions = await fetchOptions();
    setOptions(fetchedOptions);
  };

  // TODO: susinchronizuoti su URL parametrais
  if (urlParamName) console.log(urlParamName);

  React.useEffect(() => {
    initializeOptions();
  }, []);

  return [
    selectedOptions,
    setSelectedOptions,
    options,
  ];
};

export default useCheckboxFilter;
