import React, { Component } from 'react';
import classNames from 'classnames';

import { consumer } from './MenuContext';

@consumer
export class MenuItemGroup extends Component<any, any> {
  render() {
    return (
      <li className="fd-menu-item-group">
        <div className="fd-menu-item-group_label">{this.props.label}</div>
        <ul className="fd-menu-item-group_wrapper">{this.props.children}</ul>
      </li>
    );
  }
}
