import React, { Component } from 'react';
import classNames from 'classnames';
import { provider } from '@components/Ttabs/TabContext';
import { inject } from '@components/base/appContext';
import { TabPane } from '@components/Ttabs/TabPane';

@inject(['size'])
@provider
export class Tabs extends Component<any, any> {
  static TabPane = TabPane;

  state = {
    selectedItemNames: [
      this.props.selectedItemName || this.props.defaultSelectedItemName,
    ],
  };

  get classes() {
    return classNames({
      'fd-tabs': true,
    });
  }

  get tabHead() {
    const tabHead = React.Children.map(
      this.props.children,
      (item: React.ReactElement<TabPane & { type: string }>) => {
        return React.cloneElement(item, { type: 'head' });
      },
    );
    return tabHead;
  }

  get tabBody() {
    const tabBody = React.Children.map(
      this.props.children,
      (item: React.ReactElement<TabPane & { type: string }>) => {
        return React.cloneElement(item, { type: 'body' });
      },
    );
    return tabBody;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedItemName) {
      return { selectedItemNames: [nextProps.selectedItemName] };
    } else {
      return { selectedItemNames: prevState.selectedItemNames };
    }
  }

  handleInputElementClick = (event: React.SyntheticEvent, tabPane: TabPane) => {
    this.setState(
      {
        selectedItemNames: [tabPane.props.name],
      },
      () => {
        // TODO: this.props.onSelect?(radio.props.name, event)
        if (this.props.onSelect) {
          this.props.onSelect(tabPane.props.name, event);
        }
      },
    );
  };

  render() {
    return (
      <div className={`fd-tabs size-${this.props.size}`}>
        <div className="fd-tabs_head">{this.tabHead}</div>
        <div className="fd-tabs_body">{this.tabBody}</div>
      </div>
    );
  }
}
