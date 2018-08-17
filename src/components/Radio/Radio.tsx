import React, { Component } from 'react';
import classNames from 'classnames';

import { InputElement } from '@/lib';

export class Radio extends InputElement {
  get classes() {
    return classNames({
      'fd-radio': true,
      selected: this.selected,
    });
  }

  render() {
    return (
      <input
        className={this.classes}
        type="radio"
        value={this.props.value}
        key={this.props.key}
        onChange={this.onChange}
      />
    );
  }
}
