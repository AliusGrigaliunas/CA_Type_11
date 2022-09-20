import React from 'react';
import { Divider } from '@mui/material';

import ShopContext from 'pages/shop-page/contexts/shop-context';
import CheckboxGroup from 'components/form-controls/checkbox-group';
import SideBarContainer from './side-bar-container';
import DrawerHeader from '../drawer-header';
import DrawerContext from '../../contexts/drawer-context';
import RangeField from '../../../../components/form-controls/range-field/index';

type SideBarProps = {
  isExtendedLayout: boolean
};

const SideBar: React.FC<SideBarProps> = ({ isExtendedLayout }) => {
  const { open } = React.useContext(DrawerContext);

  const {
    filters: {
      price: priceFilter,
      categories: categoriesFilter,
      materialTypes: materialTypesFilter,
    },
  } = React.useContext(ShopContext);

  return (
    <SideBarContainer variant={isExtendedLayout ? 'permanent' : 'temporary'} open={open}>
      <DrawerHeader />
      <RangeField
        min={priceFilter.bounds[0]}
        max={priceFilter.bounds[1]}
        value={priceFilter.currentRange}
        onChange={(_, newRange) => priceFilter.onChange(newRange)}
      />
      <Divider />
      <CheckboxGroup
        label="Kategorijos"
        name="categories"
        options={categoriesFilter.options}
        value={categoriesFilter.selectedOptions}
        onChange={(_, newCatgories) => categoriesFilter.onChange(newCatgories)}
      />
      <Divider />
      <CheckboxGroup
        label="Medžiagos tipai"
        name="materialTypes"
        options={materialTypesFilter.options}
        value={materialTypesFilter.selectedOptions}
        onChange={(_, newMaterialTypes) => materialTypesFilter.onChange(newMaterialTypes)}
      />
    </SideBarContainer>
  );
};

export default SideBar;
