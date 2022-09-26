import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

const useItem = <T>(fetchCups: (urlParams: string) => Promise<T[]>): T[] => {
    const [Items, setItems] = React.useState<T[]>([]);
    const [searchParams] = useSearchParams();

    React.useEffect(() => {
        (async () => {
            const fetchedCups = await fetchCups(searchParams.toString());

            setItems(fetchedCups);
        })();
    }, [searchParams]);

    return Items;
};

export default useItem;
