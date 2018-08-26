import React, { Component } from 'react';
import { consumer } from '@components/Ttabs/TabContext';

export interface TabPaneProps {
  label: React.ReactNode | string;
  name: string;
}

@consumer
export class TabPane extends Component<TabPaneProps> {
  render() {
    const { children, classes } = this.props;
    return <div className={classes}>{children}</div>;
  }
}
