import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Composite.scss';

export class Composite extends Component<any, any> {
  render() {
    return (
      <li className="fd-composite-item">
        <Link />
      </li>
    );
  }
}
