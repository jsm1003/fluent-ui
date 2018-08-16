import React, { Component } from 'react';
import classNames from 'classnames';

export interface VealProps {
  className: string;
}

export class Veal extends Component<VealProps & PlainObject, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, className, ...restProps } = this.props;
    const classes = classNames({
      'fd-reveal-outer': true,
      [`${className}`]: true,
    });

    return (
      <div className={classes} {...restProps}>
        <div className="fd-reveal-inner">{this.props.children}</div>
      </div>
    );
  }
}
