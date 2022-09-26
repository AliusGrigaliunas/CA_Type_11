import * as React from 'react';
import { CheckboxOption } from 'components/form-controls/checkbox-group';
import { useSearchParams } from 'react-router-dom';

type CheckboxFilterOptions = (props: {
  urlParamName?: string
  fetchOptions: () => Promise<CheckboxOption[]>
}) => [
  CheckboxOption[],
  (newSelectedOptions: CheckboxOption[]) => void,
  CheckboxOption[],
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useCheckboxFilter: CheckboxFilterOptions = ({ urlParamName, fetchOptions }) => {
  const [options, setOptions] = React.useState<CheckboxOption[]>([]);
  const [selectedOptions, setSelectedOptions] = React.useState<CheckboxOption[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const initializeOptions = async () => {
    const fetchedOptions = await fetchOptions();
    setOptions(fetchedOptions);
  };

  React.useEffect(() => {
    initializeOptions();
  }, []);

  React.useEffect(() => {
    if (urlParamName) {
      searchParams.delete(urlParamName);
      selectedOptions.forEach(
        (option) => searchParams.append(urlParamName, option.value),
      );

      setSearchParams(searchParams);
    }
  }, [selectedOptions]);

  // console.log(String(searchParams));

  return [
    selectedOptions,
    setSelectedOptions,
    options,
  ];
};

export default useCheckboxFilter;
