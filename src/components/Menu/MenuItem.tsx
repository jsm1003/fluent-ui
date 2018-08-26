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

  handleOnClick = (event: React.SyntheticEvent) => {
    this.handleOnChange(undefined, event);
  };

  componentDidMount() {
    console.log('child mount');
  }

  render() {
    return (
      <li className={this.classes} onClick={this.handleOnClick}>
        {this.props.children}
      </li>
    );
  }
}
