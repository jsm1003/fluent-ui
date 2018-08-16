import React, { Component } from 'react';
import classNames from 'classnames';

export default class Layout extends Component<any, any>{
  state = {
    isSideBarExpand: true
  };

  activityBarClick(item) {

  }
render() {
  return (
    <ActivityBar onClick={this.activityBarClick} />
    <SideBar expand={this.state.isSideBarExpand} />
    <MainContent></MainContent>
  )
}
}
