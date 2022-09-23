import * as React from 'react';
import { CheckboxOption } from 'components/form-controls/checkbox-group';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const initializeOptions = async () => {
    const fetchedOptions = await fetchOptions();
    setOptions(fetchedOptions);
  };

  React.useEffect(() => {
    initializeOptions();
  }, []);

  React.useEffect(() => {
    if (urlParamName !== undefined) {
      searchParams.delete(urlParamName);
      selectedOptions.forEach(({ value }) => searchParams.append(urlParamName, value));

      setSearchParams(searchParams);
    }
  }, urlParamName !== undefined ? [selectedOptions] : []);

  return [
    selectedOptions,
    setSelectedOptions,
    options,
  ];
};

export default useCheckboxFilter;
