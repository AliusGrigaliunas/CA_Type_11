import { CheckboxOption } from 'components/form-controls/checkbox-group';
import * as React from 'react';
import CategoriesService from 'services/categories-service';
import CupService from 'services/cup-service';
import MaterialTypesService from 'services/material-types-service';

// Component: RangeField
type RangeFilter = {
  bounds: NumberRange,
  currentRange: NumberRange
  urlParamName: string,
  onChange: (newRange: NumberRange) => void,
};

// Component: CheckboxGroupField
type CheckboxFilter = {
  options: CheckboxOption[],
  selectedOptions: CheckboxOption[],
  urlParamName: string
  onChange: (newSelectedOptions: CheckboxOption[]) => void,
};

type Filters = {
  price: RangeFilter,
  categories: CheckboxFilter,
  materialTypes: CheckboxFilter,
};

type ShopContextValue = {
  cups: Cup[],
  filters: Filters
};

const ShopContext = React.createContext({} as ShopContextValue);

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cups, setCups] = React.useState<Cup[]>([]);
  const [filters, setFilters] = React.useState<Filters>({
    price: {
      bounds: [0, 0],
      currentRange: [0, 0],
      urlParamName: 'price',
      onChange: (newCurrentRange) => {
        console.log(newCurrentRange);
      },
    },
    categories: {
      options: [],
      selectedOptions: [],
      urlParamName: 'categories',
      onChange: (newSelectedOptions: CheckboxOption[]) => {
        console.log('categories', newSelectedOptions);
      },
    },
    materialTypes: {
      options: [],
      selectedOptions: [],
      urlParamName: 'materialTypes',
      onChange: (newSelectedOptions: CheckboxOption[]) => {
        console.log('materialTypes', newSelectedOptions);
      },
    },
  });

  const shopContextValue = React.useMemo(() => ({
    cups,
    filters,
  }), [cups, filters]);

  React.useEffect(() => {
    (async () => {
      const [
        fetchedCups,
        fetchedCategories,
        fetchedMaterialTypes,
      ] = await Promise.all([
        CupService.fetchMany(),
        CategoriesService.fetchMany(),
        MaterialTypesService.fetchMany(),
      ]);

      // Loginė dalį turėtų atlikti serveris. FE tik nustatymas
      const priceArray = fetchedCups.map((x) => x.price).sort((x, y) => x - y);
      const priceRange: NumberRange = [priceArray[0], priceArray[priceArray.length - 1]];

      const categoriesOptions = fetchedCategories.map(({ id, title }) => ({
        value: id,
        label: title,
      }));

      const materialTypesOptions = fetchedMaterialTypes.map(({ id, title }) => ({
        value: id,
        label: title,
      }));

      // Loginė dalį turėtų atlikti serveris. FE tik nustatymas
      setCups(fetchedCups);
      setFilters({
        price: {
          ...filters.price,
          bounds: priceRange,
          currentRange: priceRange,
        },
        categories: {
          ...filters.categories,
          options: categoriesOptions,
        },
        materialTypes: {
          ...filters.materialTypes,
          options: materialTypesOptions,
        },
      });
    })();
  }, []);

  return <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>;
};

export default ShopContext;
