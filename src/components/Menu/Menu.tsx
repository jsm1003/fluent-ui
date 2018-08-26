import React, { Component } from 'react';
import classNames from 'classnames';

import { inject } from '@components/base/appContext';
import { provider } from '@components/Menu/MenuContext';
import { MenuItemGroup } from '@components/Menu/MenuItemGroup';
import { MenuItem } from '@components/Menu/MenuItem';
import { SubMenu } from '@components/Menu/SubMenu';

export interface MenuProps {
  // fullly controlled
  size?: string;
  //
  selectedItemName?: string;
  defaultSelectedItemName?: string;
  onSelect?: (item: any, event: React.SyntheticEvent) => any;
}

@inject(['size'])
@provider
export class Menu extends Component<MenuProps, {}> {
  static MenuItem = MenuItem;
  static MenuItemGroup = MenuItemGroup;
  static SubMenu = SubMenu;

  state = {
    selectedItemNames: [
      this.props.selectedItemName || this.props.defaultSelectedItemName,
    ],
  };

  get classes() {
    return classNames({
      'fd-menu': true,
      [`size-${this.props.size}`]: true,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedItemName) {
      return { selectedItemNames: [nextProps.selectedItemName] };
    } else {
      return { selectedItemNames: prevState.selectedItemNames };
    }
  }

  handleInputElementClick = (event: React.SyntheticEvent, menuItem: MenuItem) => {
    this.setState(
      {
        selectedItemNames: [menuItem.props.name],
      },
      () => {
        if (this.props.onSelect) {
          this.props.onSelect(menuItem.props.name, event);
        }
      },
    );
  };

  componentDidMount() {
    console.log('parent mount');
  }

  render() {
    return (
      <ul role="menu" className={this.classes}>
        {this.props.children}
        <span className="fd-menu-indicator" style={{ display: 'none' }}>
          indicator
        </span>
      </ul>
    );
  }
}
