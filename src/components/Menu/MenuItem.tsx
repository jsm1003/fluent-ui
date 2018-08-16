import React, { Component } from 'react';
import classNames from 'classnames';

import { consumer } from '@components/Menu/MenuContext';
import Menu from '@components/Menu/Menu';

export interface MenuItemProps {
  name: string;
  root?: Menu;
}

@consumer
export class MenuItem extends Component<MenuItemProps, {}> {
  get classes() {
    return classNames({
      'fd-menu-item': true,
      'is-selected':
        this.props.name === this.props.root.state.selectedMenuItemName,
    });
  }

  handleClick = (event: React.MouseEvent) => {
    this.props.root.setState({
      selectedMenuItemName: this.props.name,
    });

    this.props.root.handleMenuClick(event, this);
  };

  render() {
    return (
      <li className={this.classes} onClick={this.handleClick}>
        {this.props.children}
      </li>
    );
  }
}
