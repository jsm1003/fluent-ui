import React, { Component } from 'react';
import classNames from 'classnames';
import { InputElement } from '@/lib';
import { consumer } from '@components/Ttabs/TabContext';

@consumer
export class TabPane extends InputElement {
  get tabHeadClasses() {
    return classNames({
      'fd-tabs_head-item': true,
      'is-selected': this.selected,
    });
  }

  get tabBodyClasses() {
    return classNames({
      'fd-tabs_body-item': true,
      'is-selected': this.selected,
    });
  }

  get tabHead() {
    const tabHead = (
      <div className={this.tabHeadClasses} onClick={this.handleOnClick}>
        {this.props.head}
      </div>
    );
    return tabHead;
  }

  get tabBody() {
    const tabBody = <div className={this.tabBodyClasses}>{this.props.children}</div>;
    return tabBody;
  }

  handleOnClick = (event: React.SyntheticEvent) => {
    this.handleOnChange(undefined, event);
  };

  render() {
    if (this.props.type === 'head') {
      return this.tabHead;
    } else if (this.props.type === 'body') {
      return this.tabBody;
    } else {
      return null;
    }
  }
}
