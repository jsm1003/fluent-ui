import React, { Component } from 'react';

export interface InputElementStates {
  selected: boolean;
}

export interface InputElementProps {
  readonly $root?: any;
  selected?: boolean;
  key: any;
  value?: any;
}

export class InputElement extends Component<InputElementProps, InputElementStates> {
  // 状态
  state = {
    selected: this.props.$root ? this.props.$root.state.selectedItems.includes(this.props.key) : this.props.selected,
  };

  // If there is acceptable to its state of the parent component,
  // then it gives control to the parent component, or to the external component
  // 如果有可接受自身状态的父组件，那么就把控制权交给父组件，否则，交给外部组件
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.$root ? null : { selected: nextProps.selected };
  }

  //
  handleOnChange(eventState, event: React.SyntheticEvent) {
    console.log(this.props.$root);
    if (this.props.$root) {
      this.props.$root.handleInputElementClick(event, this);
    } else {
      this.setState({ selected: eventState });
    }
  }

  // computed state , apply to style
  get selected() {
    return this.state.selected;
}
