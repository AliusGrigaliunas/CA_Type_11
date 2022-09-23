import useMounted from 'hooks/use-mounted';
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

const isNumericUrlParam = (
  urlParam: string | null,
): boolean => urlParam !== null && !Number.isNaN(urlParam);

const useRangeFilter: UseRangeField = ({ urlParamNames, fetchRange }) => {
  const isMounted = useMounted();
  const [searchParams, setSearchParams] = useSearchParams();
  const [range, setRange] = React.useState<NumberRange>([0, 0]);
  const [bounds, setBounds] = React.useState<NumberRange>([0, 0]);

  React.useEffect(() => {
    (async () => {
      const fetchedRange = await fetchRange();

      if (urlParamNames !== undefined) {
        const [fetchedMin, fetchedMax] = fetchedRange;
        const [minUrlParamName, maxUrlParamName] = urlParamNames;

        const minUrlString = searchParams.get(minUrlParamName);
        const maxUrlString = searchParams.get(maxUrlParamName);

        setRange([
          isNumericUrlParam(minUrlString) ? Number(minUrlString) : fetchedMin,
          isNumericUrlParam(maxUrlString) ? Number(maxUrlString) : fetchedMax,
        ]);
      } else {
        setRange(fetchedRange);
      }

      setBounds(fetchedRange);
    })();
  }, []);

  React.useEffect(() => {
    if (urlParamNames !== undefined && isMounted) {
      const [min, max] = range;
      const [lowerBound, higherBound] = bounds;
      const [minUrlParamName, maxUrlParamName] = urlParamNames;

      const minUrlString = searchParams.get(minUrlParamName);
      const maxUrlString = searchParams.get(maxUrlParamName);

      const urlMin = Number(minUrlString);
      const urlMax = Number(maxUrlString);
      const urlValuesAreDifferent = urlMin !== min || urlMax !== max;

      if (urlValuesAreDifferent) {
        searchParams.delete(minUrlParamName);
        searchParams.delete(maxUrlParamName);

        if (min > lowerBound) searchParams.set(minUrlParamName, String(min));

        if (max < higherBound) searchParams.set(maxUrlParamName, String(max));

        setSearchParams(searchParams);
      }
    }
  }, urlParamNames !== undefined ? [range] : []);

  return [
    range,
    setRange,
    bounds,
  ];
};

export default useRangeFilter;
