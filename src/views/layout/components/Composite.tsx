import React, { Component } from 'react';
import classNames from 'classnames';

import './Composite.scss';

export class Composite extends Component<any, any> {
  render() {
    return <ul className="fd-composite">{this.props.children}</ul>;
  }
}
