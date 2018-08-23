import React, { Component } from 'react';
import classNames from 'classnames';
import { InputElement } from '@/lib';

export class TabPane extends InputElement {
  get classes() {
    return classNames({
      'fd-tab-pane': true,
    });
  }

  render() {
    return (
      <div className={this.classes}>{this.props.content || this.props.children}</div>
    );
  }
}
