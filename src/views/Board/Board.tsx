import React, { Component } from 'react';
import classNames from 'classnames';

import './Board.scss';

export class FdBoard extends Component<any, any> {
  render() {
    return <div className="fd-board">{this.props.children}</div>;
  }
}
