import { CheckboxOption } from 'components/form-controls/checkbox-group';
import * as React from 'react';
import CategoriesService from 'services/categories-service';
import CupService from 'services/cup-service';
import MaterialTypesService from 'services/material-types-service';
import useCheckboxFilter from '../hooks/use-checkbox-filter';

// Component: RangeField
type RangeFilter = {
  bounds: NumberRange,
  currentRange: NumberRange
  urlParamName: string,
  onChange: (newRange: NumberRange) => void,
};

type ShopContextValue = {
  cups: Cup[],
  filters: {
    price: RangeFilter,
    categories: {
      options: CheckboxOption[],
      selectedOptions: CheckboxOption[],
      onChange: (newSelectedOptions: CheckboxOption[]) => void,
    },
    materialTypes: {
      options: CheckboxOption[],
      selectedOptions: CheckboxOption[],
      onChange: (newSelectedOptions: CheckboxOption[]) => void,
    }
  }
};

const fetchCategoryOptions = async () => {
  const fetchedCategories = await CategoriesService.fetchMany();

  return fetchedCategories.map(({ id, title }) => ({
    value: id,
    label: title,
  }));
};

const fetchMaterialTypesOptions = async () => {
  const fetchedMaterialTypes = await MaterialTypesService.fetchMany();

  return fetchedMaterialTypes.map(({ id, title }) => ({
    value: id,
    label: title,
  }));
};

const ShopContext = React.createContext({} as ShopContextValue);

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cups, setCups] = React.useState<Cup[]>([]);
  const [categories, setCategories, categoriesOptions] = useCheckboxFilter({
    urlParamName: 'categories',
    fetchOptions: fetchCategoryOptions,
  });

  console.log('Persikrove Provider');

  const [materialTypes, setMaterialTypes, materialTypesOptions] = useCheckboxFilter({
    urlParamName: 'materialTypes',
    fetchOptions: fetchMaterialTypesOptions,
  });

  const [priceFilter, setPriceFilter] = React.useState<RangeFilter>({
    bounds: [0, 0],
    currentRange: [0, 0],
    urlParamName: 'price',
    onChange: (newCurrentRange) => {
      setPriceFilter((currPriceFilter) => ({
        ...currPriceFilter,
        currentRange: newCurrentRange,
      }));
    },
  });

  const shopContextValue: ShopContextValue = React.useMemo(() => ({
    cups,
    filters: {
      price: priceFilter,
      categories: {
        options: categoriesOptions,
        selectedOptions: categories,
        onChange: setCategories,
      },
      materialTypes: {
        options: materialTypesOptions,
        selectedOptions: materialTypes,
        onChange: setMaterialTypes,
      },
    },
  }), [cups, priceFilter, categories, materialTypes]);

  React.useEffect(() => {
    (async () => {
      const fetchedCups = await CupService.fetchMany();

      // Loginė dalį turėtų atlikti serveris. FE tik nustatymas
      const priceArray = fetchedCups.map((x) => x.price).sort((x, y) => x - y);
      const priceRange: NumberRange = [priceArray[0], priceArray[priceArray.length - 1]];

      // Loginė dalį turėtų atlikti serveris. FE tik nustatymas
      setCups(fetchedCups);
      setPriceFilter({
        ...priceFilter,
        bounds: priceRange,
        currentRange: priceRange,
      });
    })();
  }, []);

  return (
    <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
