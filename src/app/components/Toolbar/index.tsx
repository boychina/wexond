import React from 'react';
import { observer } from 'mobx-react';
import NavigationButtons from '../NavigationButtons';
import ToolbarSeparator from './Separator';
import {
  StyledToolbar, Handle, TabsSection, Line,
} from './styles';
import Store from '../../store';
import AddressBar from '../AddressBar';
import TabBar from '../TabBar';
import ToolbarButton from './Button';
import BookmarksDialog from '../BookmarksDialog';
import { Platforms } from '../../enums';
import WindowsControls from '../WindowsControls';
import { TOOLBAR_HEIGHT } from '../../constants';

const workspacesIcon = require('../../../shared/icons/tab-groups.svg');
const menuIcon = require('../../../shared/icons/menu.svg');
const starIcon = require('../../../shared/icons/star.svg');
const starBorderIcon = require('../../../shared/icons/star-border.svg');

@observer
export default class Toolbar extends React.Component {
  public static Button = ToolbarButton;

  public static Separator = ToolbarSeparator;

  public onWorkspacesIconClick = () => {
    Store.workspaces.visible = true;
  };

  public toggleMenu = () => {
    Store.menu.visible = !Store.menu.visible;
  };

  public render() {
    const star = starBorderIcon;

    return (
      <StyledToolbar isFullscreen={Store.isFullscreen}>
        <Handle />
        <NavigationButtons />
        <ToolbarSeparator style={{ marginRight: 16 }} />
        <TabsSection>
          <AddressBar visible={Store.addressBar.toggled} />
          <TabBar />
        </TabsSection>
        <ToolbarSeparator style={{ marginLeft: 16 }} />
        <div style={{ position: 'relative' }}>
          <ToolbarButton size={20} icon={star} />
          <BookmarksDialog />
        </div>
        <ToolbarButton size={16} icon={workspacesIcon} onClick={this.onWorkspacesIconClick} />
        <ToolbarButton
          onClick={this.toggleMenu}
          size={20}
          icon={menuIcon}
          style={{ marginRight: 4 }}
        />
        {Store.platform !== Platforms.MacOS && <WindowsControls />}
        <Line />
      </StyledToolbar>
    );
  }
}
