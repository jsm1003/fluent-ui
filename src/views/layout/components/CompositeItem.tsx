import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './compositeItem.scss';

export class CompositeItem extends Component<any, any> {
  get classes() {
    return classNames({
      ['fd-composite-item']: true,
      selected: this.props.to === this.props.root.state.selectedTo,
    });
  }

  handleClick(event: React.MouseEvent) {
    this.props.root.setState(
      {
        activeItemName: this.props.to,
      },
      () => {
        this.props.root.handleCompositeItemClick(event, this);
      },
    );
  }

  render() {
    const { to, title, icon } = this.props;
    return (
      <li className="fd-composite-item">
        <Link to={to} title={title} onClick={this.handleClick}>
          {icon}
        </Link>
      </li>
    );
  }
}
