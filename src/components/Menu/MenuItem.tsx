import React, { Component } from 'react';
import classNames from 'classnames';

import { InputElement } from '@/lib';
import { consumer } from '@components/Menu/MenuContext';
import Menu from '@components/Menu/Menu';

export interface MenuItemProps {
  key: string;
  root?: Menu;
}

@consumer
export class MenuItem extends InputElement {
  get classes() {
    return classNames({
      'fd-menu-item': true,
      'is-selected': this.selected,
    });
  }

  onClick = (event: React.SyntheticEvent) => {
    this.handleOnChange(undefined, event);
  };

  render() {
    return (
      <li className={this.classes} onClick={this.onClick}>
        {this.props.children}
      </li>
    );
  }
}
