// tslint:disable
import React, { Component } from 'react';

import { inject as injectCurry } from '@/lib';

export enum themes {
  light = 'theme_default-light',
  dark = 'theme_default-dark',
}

export enum sizes {
  small = 'small',
  default = 'default',
  large = 'large',
}

export const AppContext = React.createContext({});

export const inject = injectCurry(AppContext);

export class AppProvider extends Component<{}, {}> {
  private $theme = themes.light;

  private get theme() {
    return this.$theme;
  }

  private set theme(theme) {
    document.documentElement.classList.remove(this.$theme);
    document.documentElement.classList.add(theme);
    this.$theme = theme;
  }

  toggleTheme = () => {
    this.theme = this.theme === themes.light ? themes.dark : themes.light;
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          theme: this.theme,
          size: sizes.default,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
