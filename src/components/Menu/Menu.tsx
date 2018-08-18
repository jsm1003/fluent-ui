import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { inject } from '@components/base/appContext';
import { provider } from '@components/Menu/MenuContext';
import { MenuItemGroup } from '@components/Menu/MenuItemGroup';
import { MenuItem } from '@components/Menu/MenuItem';
import { SubMenu } from '@components/Menu/SubMenu';

export interface MenuProps {
  // fullly controlled
  size?: string;
  //
  selectedItemKey: string;
  onSelect?: (item: any, event: React.SyntheticEvent) => any;
}

@inject(['size'])
@provider
export default class Menu extends Component<MenuProps, {}> {
  static propTypes = {
    size: PropTypes.string,
    selectedMenuItemNames: PropTypes.string,
    onSelect: PropTypes.func,
  };

  static MenuItem = MenuItem;
  static MenuItemGroup = MenuItemGroup;
  static SubMenu = SubMenu;

  state = {
    selectedItemKeys: [this.props.selectedItemKey],
  };

  get classes() {
    return classNames({
      'fd-menu': true,
      [`size-${this.props.size}`]: true,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { selectedItemKeys: [nextProps.selectedItemKey] };
  }

  handleMenuClick(event: React.MouseEvent, menuItem: MenuItem) {
    this.setState(
      {
        selectedItemKeys: [menuItem.props.key],
      },
      this.props!.onSelect(menuItem.props.key, event),
    );
  }

  componentDidMount() {
    console.log(this.props.size);
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
