import React, { Component } from 'react';
import { Button } from '@components/Button/Button';

import './Button.scss';

export default class FdButton extends Component {
  render() {
    return (
      <div className="fd-button_wrapper">
        {[...Array(10)].map((item, index) => (
          <Button key={index} className="button-test">
            Button
          </Button>
        ))}
      </div>
    );
  }
}
