import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

type UseRangeField = (props: {
  urlParamNames?: [string, string]
  fetchRange: () => Promise<NumberRange>
}) => [
    NumberRange,
    (newRange: NumberRange) => void,
    NumberRange,
  ];

const useRangeFilter: UseRangeField = ({ urlParamNames, fetchRange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [range, setRange] = React.useState<NumberRange>([0, 0]);
  const [bounds, setBounds] = React.useState<NumberRange>([0, 0]);

  React.useEffect(() => {
    (async () => {
      const fetchedRange = await fetchRange();

      setRange(fetchedRange);
      setBounds(fetchedRange);
    })();
  }, []);

  React.useEffect(() => {
    if (urlParamNames) {
      const [min, max] = range;
      const [lowerBound, higherBound] = bounds;
      const [minUrlParamName, maxUrlParamName] = urlParamNames;

      searchParams.delete(minUrlParamName);
      searchParams.delete(maxUrlParamName);

      if (min > lowerBound) {
        searchParams.set(minUrlParamName, String(min));
      }

      if (max < higherBound) {
        searchParams.set(minUrlParamName, String(max));
      }

      setSearchParams(searchParams);
    }
  }, urlParamNames ? [range] : []);

  return [
    range,
    setRange,
    bounds,
  ];
};

export default useRangeFilter;
