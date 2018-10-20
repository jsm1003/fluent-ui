import React, { Component } from 'react';
import classNames from 'classnames';
import { tween, easing } from 'popmotion';
import styler, { Styler } from 'stylefire';

import { consumer } from './MenuContext';

export interface SubMenuProps {
  name: string;
  label: string | React.ReactNode;
}

export interface SubMenuStates {
  isExpand: boolean;
}

@consumer
export class SubMenu extends Component<SubMenuProps, SubMenuStates> {
  state = {
    isExpand: true,
  };

  $ul: Styler;
  ulDom: React.RefObject<HTMLUListElement> = React.createRef();
  ulDomHeight: number;

  get menuItemWrapperClasses() {
    return classNames({
      'fd-sub-menu_item-wrapper': true,
      'is-expand': this.state.isExpand,
    });
  }

  get indicatiorContonent() {
    return this.state.isExpand ? '👇' : '👉';
  }

  handleSubMenuClick = (event: React.MouseEvent) => {
    this.setState({ isExpand: !this.state.isExpand }, this.moveUlDom);
  };

  moveUlDom = () => {
    const isExpand: boolean = this.state.isExpand;

    tween({
      from: {
        height: isExpand ? 0 : this.ulDomHeight,
      },
      to: {
        height: isExpand ? this.ulDomHeight : 0,
      },
      ease: easing.easeInOut,
      duration: 300,
    }).start(this.$ul.set);
  };

  componentDidMount() {
    if (this.ulDom.current) {
      this.$ul = styler(this.ulDom.current, {});
      this.ulDomHeight = this.$ul.get('height');
    }
  }

  render() {
    return (
      <li className="fd-sub-menu">
        <div className="fd-sub-menu_header" onClick={this.handleSubMenuClick}>
          <span className="fd-sub-menu_label">{this.props.label}</span>
          <span className="fd-sub-menu_indicator">{this.indicatiorContonent}</span>
        </div>
        <ul ref={this.ulDom} className={this.menuItemWrapperClasses}>
          {this.props.children}
        </ul>
      </li>
    );
  }
}
