import * as React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DrawerContext from '../../contexts/drawer-context';

export type SideBarItemProps = {
  text: string,
  Icon: MuiIconComponent,
};

const SideBarItem: React.FC<SideBarItemProps> = ({
  text,
  Icon,
}) => {
  const { open } = React.useContext(DrawerContext);

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
        <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;
