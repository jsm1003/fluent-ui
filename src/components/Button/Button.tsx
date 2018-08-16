import React, { Component } from 'react';
import classNames from 'classnames';
import { Veal } from '@components/Veal/Veal';

export class Button extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { className, children, ...restProps } = this.props;
    const classes: string = classNames({
      [`${className}`]: true,
      'fd-button': true,
    });

    return (
        <div className={classes} {...restProps}>
        <Veal>
          {children}
        </Veal>
        </div>
  }
}
