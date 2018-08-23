import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';
import classNames from 'classnames';

import { TabPane } from './TabPane';
import { TabPaneProps } from './TabPane';

import * as styles from './Tabs.scss';

export interface TabProps {
  activeTabName: string;
  onTabSelect?: (item: React.ReactChild) => void;
}

export interface TabStates {
  activeTabName: string;
}

export class Tabs extends Component<TabProps, TabStates> {
  static defaultProps = {};
  static TabPane = TabPane;

  indicator: HTMLElement;
  selectedIndex: number;

  constructor(props) {
    super(props);

    const { children, activeTabName } = this.props;
    this.state = {
      activeTabName: activeTabName || children[0].name,
    };
  }

  handleClick(item: React.ReactElement<TabPaneProps>, event) {
    const selectedItem = event.target as HTMLElement;

    anime({
      targets: this.indicator,
      translateX: selectedItem.offsetLeft,
      width: selectedItem.offsetWidth,
      easing: 'easeInQuad',
      duration: 320,
    });

    this.setState({
      activeTabName: item.props.name,
    });

    const onTabSelect = this.props.onTabSelect;
    if (typeof onTabSelect === 'function') {
      onTabSelect(item);
    }
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { children } = this.props;
    React.Children.forEach(children, (item: React.ReactElement<TabPaneProps>, index) => {
      if (this.props.activeTabName === item.props.name) {
        this.selectedIndex = index;
      }
    });

    if (!this.selectedIndex) {
      this.selectedIndex = 0;
    }

    this.initIndicator();
  }

  initIndicator() {
    const $el = findDOMNode(this) as HTMLElement;
    const selectedItem = $el.querySelectorAll('.head-item')[
      this.selectedIndex
    ] as HTMLElement;

    anime({
      targets: this.indicator,
      width: selectedItem.offsetWidth,
      translateX: selectedItem.offsetLeft,
      easing: 'easeInQuad',
      duration: 320,
    });
  }

  render() {
    const { children } = this.props;
    const tabHeader = React.Children.map(
      children,
      (item: React.ReactElement<TabPaneProps>, index) => {
        const { label, name } = item.props;
        const headItemClasses = classNames({
          'head-item': true,
          selected: name === this.state.activeTabName,
        });

        return (
          <div
            className={headItemClasses}
            onClick={event => {
              this.handleClick(item, event);
            }}
          >
            {label}
          </div>
        );
      },
    );

    const TabBody = React.Children.map(
      children,
      (item: React.ReactElement<TabPaneProps & { classes: string }>, index) => {
        const { name } = item.props;

        const bodyItemClass = classNames({
          'body-item': true,
          selected: name === this.state.activeTabName,
        });

        return React.cloneElement(item, {
          classes: bodyItemClass,
        });
      },
    );

    return (
      <div className={styles.fdTabs}>
        <div className={styles.tabsHead}>
          {tabHeader}
          <div className={styles.headIndicator}>
            <span
              className={styles.indicatorInner}
              ref={node => {
                this.indicator = node;
              }}
            />
          </div>
        </div>

        <div className={styles.tabsBody}>{TabBody}</div>
      </div>
    );
  }
}
