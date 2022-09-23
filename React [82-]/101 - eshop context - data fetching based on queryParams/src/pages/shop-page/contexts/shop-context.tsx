import { CheckboxOption } from 'components/form-controls/checkbox-group';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoriesService from 'services/categories-service';
import CupService from 'services/cup-service';
import MaterialTypesService from 'services/material-types-service';
import useCheckboxFilter from '../hooks/use-checkbox-filter';
import useRangeField from '../hooks/use-range-filter';

type ShopContextValue = {
  cups: Cup[],
  filters: {
    price: {
      range: NumberRange,
      bounds: NumberRange,
      onChange: (newRange: NumberRange) => void,
    },
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
  const [searchParams] = useSearchParams();
  const [cups, setCups] = React.useState<Cup[]>([]);
  const [categories, setCategories, categoriesOptions] = useCheckboxFilter({
    urlParamName: 'categories',
    fetchOptions: fetchCategoryOptions,
  });

  const [materialTypes, setMaterialTypes, materialTypesOptions] = useCheckboxFilter({
    urlParamName: 'materialTypes',
    fetchOptions: fetchMaterialTypesOptions,
  });

  const [priceRange, setPriceRange, priceBounds] = useRangeField({
    urlParamName: 'price',
    fetchRange: CupService.fetchPriceRange,
  });

  const shopContextValue: ShopContextValue = React.useMemo(() => ({
    cups,
    filters: {
      price: {
        range: priceRange,
        bounds: priceBounds,
        onChange: setPriceRange,
      },
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
  }), [cups, priceRange, categories, materialTypes]);

  React.useEffect(() => {
    (async () => {
      const fetchedCups = await CupService.fetchMany(searchParams.toString());

      setCups(fetchedCups);
    })();
  }, [searchParams]);

  return (
    <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
