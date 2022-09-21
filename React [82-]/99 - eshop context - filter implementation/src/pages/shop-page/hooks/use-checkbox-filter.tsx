import * as React from 'react';
import { CheckboxOption } from 'components/form-controls/checkbox-group';

type CheckboxFilterOptions = {
  urlParamName?: string
  fetchOptions: () => Promise<CheckboxOption[]>
};

const useCheckboxFilter = ({
  urlParamName,
  fetchOptions,
}: CheckboxFilterOptions): [
    CheckboxOption[],
    (newSelectedOptions: CheckboxOption[]) => void,
    CheckboxOption[],
  ] => {
  const [options, setOptions] = React.useState<CheckboxOption[]>([]);
  const [selectedOptions, setSelectedOptions] = React.useState<CheckboxOption[]>([]);

  // TODO: susinchronizuoti su URL parametrais
  if (urlParamName) console.log(urlParamName);

  React.useEffect(() => {
    (async () => {
      const fetchedOptions = await fetchOptions();
      setOptions(fetchedOptions);
    })();
  }, []);

  return [
    selectedOptions,
    setSelectedOptions,
    options,
  ];
};

export default useCheckboxFilter;
