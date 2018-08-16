import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { inject } from '@components/base/appContext';
import { MenuContext } from '@components/Menu/MenuContext';
import { MenuItemGroup } from '@components/Menu/MenuItemGroup';
import { MenuItem } from '@components/Menu/MenuItem';
import { SubMenu } from '@components/Menu/SubMenu';

export interface MenuProps {
  // fullly controlled
  size?: string;
  //
  selectedMenuItemName: string;
  onMenuSelect?(selectMenuItemName: string): void;
}

@inject(['size'])
export default class Menu extends Component<MenuProps, {}> {
  static propTypes = {
    size: PropTypes.string,
    selectedMenuItemName: PropTypes.string,
    onMenuSelect: PropTypes.func,
  };

  static MenuItem = MenuItem;
  static MenuItemGroup = MenuItemGroup;
  static SubMenu = SubMenu;

  state = {
    selectedMenuItemName: this.props.selectedMenuItemName,
  };

  get classes() {
    return classNames({
      'fd-menu': true,
      [`size-${this.props.size}`]: true,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedMenuItemName !== prevState.prevSelectedMenuItemName) {
      return {
        prevSelectedMenuItemName: nextProps.selectedMenuItemName,
        selectedMenuItemName: nextProps.selectedMenuItemName,
      };
    }

    return null;
  }

  handleMenuClick(event: React.MouseEvent, menuItem: MenuItem) {
    this.props!.onMenuSelect(menuItem.props.name);
  }

  componentDidMount() {
    console.log(this.props.size);
  }

  render() {
    return (
      <MenuContext.Provider value={{ root: this }}>
        <ul role="menu" className={this.classes}>
          {this.props.children}
          <span className="fd-menu-indicator" style={{ display: 'none' }}>
            indicator
          </span>
        </ul>
      </MenuContext.Provider>
    );
  }
}
