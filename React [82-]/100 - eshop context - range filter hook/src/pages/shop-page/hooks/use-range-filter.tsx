import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

type UseRangeField = (props: {
  urlParamName?: string
  fetchRange: () => Promise<NumberRange>
}) => [
    NumberRange,
    (newRange: NumberRange) => void,
    NumberRange,
  ];

const useRangeField: UseRangeField = ({ urlParamName, fetchRange }) => {
  const [_searchParams, setSearchParams] = useSearchParams();
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
    if (urlParamName) {
      const [min, max] = range;
      const [lowerBound, higherBound] = bounds;
      const newSearchParams: { [k: string]: string } = {};

      if (min > lowerBound) {
        newSearchParams[`${urlParamName}_min`] = String(min);
      }

      if (max < higherBound) {
        newSearchParams[`${urlParamName}_max`] = String(max);
      }

      setSearchParams(newSearchParams);
    }
  }, range);

  return [
    range,
    setRange,
    bounds,
  ];
};

export default useRangeField;
