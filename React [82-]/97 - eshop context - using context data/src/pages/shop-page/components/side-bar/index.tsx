import React from 'react';
import { IconButton, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ShopContext from 'pages/shop-page/contexts/shop-context';
import CheckboxGroup from 'components/form-controls/checkbox-group';
import SideBarContainer from './side-bar-container';
import DrawerHeader from '../drawer-header';
// import SideBarItem, { SideBarItemProps } from './side-bar-item';
import DrawerContext from '../../contexts/drawer-context';
import RangeField from '../../../../components/form-controls/range-field/index';

const SideBar: React.FC = () => {
  const { open, closeDrawer } = React.useContext(DrawerContext);
  const {
    filters: {
      price: priceFilter,
      categories: categoriesFilter,
      materialTypes: materialTypesFilter,
    },
  } = React.useContext(ShopContext);

  return (
    <SideBarContainer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
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
