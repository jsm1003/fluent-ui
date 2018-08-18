import React, { Component } from 'react';
import classNames from 'classnames';

import { InputElement } from '@/lib';

export class Radio extends InputElement {
  get classes() {
    return classNames({
      'fd-radio': true,
      'is-selected': this.selected,
    });
  }

  onChange = (event: React.SyntheticEvent) => {
    const eventState = event.target.checked;
    this.handleOnChange(eventState, event);
  };

  render() {
    return (
      <input
        className={this.classes}
        type="radio"
        value={this.props.value}
        onChange={this.onChange}
      />
    );
  }
}
