import React, { Component } from 'react';

export interface TabPaneProps {
  label: React.ReactNode | string;
  name: string;
}

export class TabPane extends Component<TabPaneProps> {
  render() {
    const { children, classes } = this.props;
    return <div className={classes}>{children}</div>;
  }
}
