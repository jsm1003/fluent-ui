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
    selectedItemNames: [
      this.props.selectedItemName || this.props.defaultSelectedItemName,
    ],
  };

  get classes() {
    return classNames({
      'fd-radio-group': true,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedItemName) {
      return { selectedItemNames: [nextProps.selectedItemName] };
    } else {
      return { selectedItemNames: prevState.selectedItemNames };
    }
  }

  handleInputElementClick = (event: React.SyntheticEvent, radio: Radio) => {
    this.setState(
      {
        selectedItemNames: [radio.props.name],
      },
      () => {
        // TODO: this.props.onSelect?(radio.props.name, event)
        if (this.props.onSelect) {
          this.props.onSelect(radio.props.name, event);
        }
      },
    );
  };

  render() {
    return <div className={this.classes}>{this.props.children}</div>;
  }
}
