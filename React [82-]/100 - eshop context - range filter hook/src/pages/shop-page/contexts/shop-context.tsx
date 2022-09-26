import { CheckboxOption } from 'components/form-controls/checkbox-group';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoriesService from 'services/categories-service';
import CupService from 'services/cup-service';
import MaterialTypesService from 'services/material-types-service';
import useCheckboxFilter from '../hooks/use-checkbox-filter';
import useItem from '../hooks/use-products';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams] = useSearchParams();
  const [categories, setCategories, categoriesOptions] = useCheckboxFilter({
    urlParamName: 'categoryId',
    fetchOptions: fetchCategoryOptions,
  });

  const [materialTypes, setMaterialTypes, materialTypesOptions] = useCheckboxFilter({
    urlParamName: 'materialTypeId',
    fetchOptions: fetchMaterialTypesOptions,
  });

  const [priceRange, setPriceRange, priceBounds] = useRangeField({
    urlParamName: 'price',
    fetchRange: CupService.fetchPriceRange,
  });

  const cups = useItem(() => CupService.fetchMany(String(searchParams)));

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

  return (
    <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;

/*
  1. Iškelti visą logigą susijusią su puodeliais į hooksa useProducts

  2. Susinchronizuoti 'useCheckboxFilter' komponento parametrus
    * Atkreipti dėmesį į parametrų formatą JSON dokumentacijoje:
      https://github.com/typicode/json-server#filter
    * Įvertinti, kad tiek 'useCheckboxFilter' tiek 'useRangeField' parametrų sinchronizavimas
      neturi įtakoti kitų (jau egiztuojančių parametrų)
*/
