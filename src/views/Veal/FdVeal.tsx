import React, { Component } from 'react';
import { Veal } from '@components/Veal/Veal.tsx';

import './FdVeal.scss';

export default class FdVeal extends Component {
  render() {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
      <div className="fd-veal-wrapper">
        {arr.map(item => (
          <Veal
            className="fd-test"
            style={{ color: 'red' }}
            key={item}
          >
            It's work!
          </Veal>
        ))}
      </div>
    );
  }
}
