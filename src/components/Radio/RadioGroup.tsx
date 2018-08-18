import React, { Component } from 'react';
import classNames from 'classnames';

import { inject } from '@components/base/appContext';
import { consumer, provider } from './RadioContext';
import { Radio } from './Radio';

@inject(['size'])
@provider
export class RadioGroup extends Component<any, any> {
  static Radio = consumer(Radio);

  state = {
    selectedItemKeys: [this.props.selectedItemKey],
  };

  get classes() {
    return classNames({
      'fd-radio-group': true,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { selectedItemKeys: [nextProps.selectedItemKeys] };
  }

  // TODO: add @onSelected ?
  handleInputElementClick(event: React.SyntheticEvent, item: Radio) {
    console.log('??');

    this.setState(
      { selectedItemKeys: [item.props.key] },
      this.props!.onSelect(event, item),
    );
  }

  render() {
    return <div className={this.classes}>{this.props.children}</div>;
  }
}
