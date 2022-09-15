import React from 'react';
import {
  List,
  Divider,
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import SideBarContainer, { type SideBarContainerProps } from './side-bar-container';
import DrawerHeader from '../drawer-header';
import SideBarItem, { SideBarItemProps } from './side-bar-item';

type MenuItemData = Pick<SideBarItemProps, 'text' | 'Icon'>;

type SideBarProps = {
  SideBarContainerProps: Omit<SideBarContainerProps, 'open' | 'variant'>,
  open: boolean,
  closeDrawer: VoidFunction,
};

const userMenuItemsData: MenuItemData[] = [
  { text: 'Inbox', Icon: InboxIcon },
  { text: 'Starred', Icon: MailIcon },
  { text: 'Send email', Icon: InboxIcon },
  { text: 'Drafts', Icon: MailIcon },
];

const adminMenuItemsData: MenuItemData[] = [
  { text: 'All mail', Icon: MailIcon },
  { text: 'Trash', Icon: MailIcon },
  { text: 'Spam', Icon: MailIcon },
];

const SideBar: React.FC<SideBarProps> = ({
  SideBarContainerProps,
  open,
  closeDrawer,
}) => (
  <SideBarContainer variant="permanent" open={open} {...SideBarContainerProps}>
    <DrawerHeader>
      <IconButton onClick={closeDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {userMenuItemsData.map((menuItemData) => (
        <SideBarItem key={menuItemData.text} {...menuItemData} open={open} />
      ))}
    </List>
    <Divider />
    <List>
      {adminMenuItemsData.map((menuItemData) => (
        <SideBarItem key={menuItemData.text} {...menuItemData} open={open} />
      ))}
    </List>
  </SideBarContainer>
);

export default SideBar;
