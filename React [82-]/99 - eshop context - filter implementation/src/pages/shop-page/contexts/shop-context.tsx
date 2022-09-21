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

// Component: CheckboxGroupField
type CheckboxFilter = {
  options: CheckboxOption[],
  selectedOptions: CheckboxOption[],
  urlParamName: string
  onChange: (newSelectedOptions: CheckboxOption[]) => void,
};

type Filters = {
  price: RangeFilter,
  materialTypes: CheckboxFilter,
};

type ShopContextValue = {
  cups: Cup[],
  filters: Filters & {
    categories: {
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

const ShopContext = React.createContext({} as ShopContextValue);

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cups, setCups] = React.useState<Cup[]>([]);
  const [selectedCategories, setSelectedCategories, categoriesOptions] = useCheckboxFilter({
    urlParamName: 'categories',
    fetchOptions: fetchCategoryOptions,
  });

  const [filters, setFilters] = React.useState<Filters>({
    price: {
      bounds: [0, 0],
      currentRange: [0, 0],
      urlParamName: 'price',
      onChange: (newCurrentRange) => {
        setFilters((currentFilters) => ({
          ...currentFilters,
          price: {
            ...currentFilters.price,
            currentRange: newCurrentRange,
          },
        }));
      },
    },
    materialTypes: {
      options: [],
      selectedOptions: [],
      urlParamName: 'materialTypes',
      onChange: (newSelectedOptions: CheckboxOption[]) => {
        setFilters((currentFilters) => ({
          ...currentFilters,
          materialTypes: {
            ...currentFilters.materialTypes,
            selectedOptions: newSelectedOptions,
          },
        }));
      },
    },
  });

  const shopContextValue: ShopContextValue = React.useMemo(() => ({
    cups,
    filters: {
      ...filters,
      categories: {
        options: categoriesOptions,
        selectedOptions: selectedCategories,
        onChange: setSelectedCategories,
      },
    },
  }), [cups, filters, selectedCategories]);

  React.useEffect(() => {
    (async () => {
      const [
        fetchedCups,
        fetchedMaterialTypes,
      ] = await Promise.all([
        CupService.fetchMany(),
        CategoriesService.fetchMany(),
        MaterialTypesService.fetchMany(),
      ]);

      // Loginė dalį turėtų atlikti serveris. FE tik nustatymas
      const priceArray = fetchedCups.map((x) => x.price).sort((x, y) => x - y);
      const priceRange: NumberRange = [priceArray[0], priceArray[priceArray.length - 1]];

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
        materialTypes: {
          ...filters.materialTypes,
          options: materialTypesOptions,
        },
      });
    })();
  }, []);

  return (
    <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
