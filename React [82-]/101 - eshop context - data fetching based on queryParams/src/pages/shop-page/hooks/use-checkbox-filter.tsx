import * as React from 'react';
import { CheckboxOption } from 'components/form-controls/checkbox-group';
import { useSearchParams } from 'react-router-dom';
import useMounted from 'hooks/use-mounted';

type CheckboxFilterOptions = {
  urlParamName?: string
  fetchOptions: () => Promise<CheckboxOption[]>
};

type UseCheckboxFilter = (props: CheckboxFilterOptions) => [
  CheckboxOption[],
  (newSelectedOptions: CheckboxOption[]) => void,
  CheckboxOption[],
];

const urlValuesNotInOptions = (values: string[], options: CheckboxOption[]) => {
  const optionsValues = options.map(({ value }) => value);

  return JSON.stringify(values) !== JSON.stringify(optionsValues);
};

const useCheckboxFilter: UseCheckboxFilter = ({ urlParamName, fetchOptions }) => {
  const isMounted = useMounted();
  const [options, setOptions] = React.useState<CheckboxOption[]>([]);
  const [selectedOptions, setSelectedOptions] = React.useState<CheckboxOption[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    (async () => {
      const fetchedOptions = await fetchOptions();

      if (urlParamName !== undefined) {
        const urlValues = searchParams.getAll(urlParamName);
        const urlOptions = fetchedOptions.filter(({ value }) => urlValues.includes(value));

        if (urlOptions.length > 0) setSelectedOptions(urlOptions);
      }
      setOptions(fetchedOptions);
    })();
  }, []);

  React.useEffect(() => {
    if (urlParamName !== undefined && isMounted) {
      const urlValues = searchParams.getAll(urlParamName);

      if (urlValuesNotInOptions(urlValues, selectedOptions)) {
        searchParams.delete(urlParamName);
        selectedOptions.forEach(({ value }) => searchParams.append(urlParamName, value));

        setSearchParams(searchParams);
      }
    }
  }, urlParamName !== undefined ? [selectedOptions] : []);

  return [
    selectedOptions,
    setSelectedOptions,
    options,
  ];
};

export default useCheckboxFilter;
