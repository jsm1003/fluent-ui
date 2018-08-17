import React, { Component } from 'react';

export interface InputElementStates {
  selected: boolean;
}

export interface InputElementProps {
  readonly $root?: any;
  selected: boolean;
  key?: any;
  value: any;
}

export class InputElement extends Component<InputElementProps, InputElementStates> {
  // 状态
  state = {
    selected: this.props.selected,
  };

  // If there is acceptable to its state of the parent component,
  // then it gives control to the parent component, or to the external component
  // 如果有可接受自身状态的父组件，那么就把控制权交给父组件，否则，交给外部组件
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.$root && nextProps.selected !== prevState.prevSelected) {
      return {
        prevSelected: nextProps.selected,
        selected: nextProps.selected,
      };
    }

    return null;
  }

  //
  onChange = (event: React.SyntheticEvent) => {
    const selected = event.target.checked;

    if (this.props.$root) {
      this.props.$root.handleInputElementClick(event, this);
    } else {
      this.setState({ selected: selected });
    }
  };

  // computed state
  get selected() {
    return this.props.$root
      ? this.props.$root.state.selectedItems.includes(this.props.key)
      : this.state.selected;
  }
}
