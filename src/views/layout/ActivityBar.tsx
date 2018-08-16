import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import './ActivityBar.scss';

@withRouter
export default class ActivityBar extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  handleClick() {}

  render() {
    return (
      <div className="activitybar" role="activityBar">
        <div className="composite-bar">
          <ul className="asdf">
            <li>
              <a onClick={this.handleClick()} />
            </li>
          </ul>
        </div>
        <div className="global-bar" />
      </div>
    );
  }
}
