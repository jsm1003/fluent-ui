import React, { Component } from 'react';
import classNames from 'classnames';

import { consumer, provider } from './RadioContext';
import { Radio } from './Radio';

@provider
export class RadioGroup extends Component<any, any> {
  static Radio = consumer(Radio);

  state = {
    selectedItems: this.props.selectedItem,
  };

  get classes() {
    return classNames({
      'fd-radio-group': true,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {}

  handleInputElementClick(event: React.SyntheticEvent, item: Radio) {}

  render() {
    return <div className={this.classes}>{this.props.children}</div>;
  }
}
