import React, { Component } from 'react';

export interface InputElementStates {
  selected: boolean;
}

export interface InputElementProps {
  $root?: any;
  selected?: boolean;
  defaultSelected?: boolean;
  name: any;
  value?: any;
  label?: any;
  onSelect?(event: React.SyntheticEvent): void;
}

export class InputElement extends Component<InputElementProps, InputElementStates> {
  handleOnChange(eventState, event: React.SyntheticEvent) {
    if (this.props.$root) {
      this.props.$root.handleInputElementClick(event, this);
    } else {
      this.props.onSelect(event);
    }
  }

  // computed state , apply to style
  get selected() {
    return this.props.$root
      ? this.props.$root.state.selectedItemNames.includes(this.props.name)
      : this.props.selected;
  }

  get content() {
    return this.props.label || this.props.children;
  }
}
