import React, { Component } from 'react';
import classNames from 'classnames';

import { FdBoard } from '@/views/Board/Board';
import Menu from '@components/Menu/Menu';
import { inject } from '@components/base/appContext';

@inject(['toggleTheme'])
export default class FdMenu extends Component<any, any> {
  state = {
    activeMenuItem: '2-1',
    theme: 'light',
    size: 'default',
  };

  onMenuSelect = currentName => {
    console.log(currentName);
  };

  toggleActiveItem = () => {
    this.setState({
      activeMenuItem: this.state.activeMenuItem === '2-1' ? '2-2' : '2-1',
    });
  };

  toggleTheme = () => {
    this.props.toggleTheme();
  };

  render() {
    const { size, activeMenuItem } = this.state;
    return (
      <FdBoard>
        <button onClick={this.toggleActiveItem}>切换菜单</button>
        <button onClick={this.toggleTheme}>切换主题</button>
        <Menu
          size={size}
          selectedMenuItemName={activeMenuItem}
          onMenuSelect={this.onMenuSelect}
        >
          <Menu.MenuItemGroup label="AA">
            <Menu.MenuItem name="1-1">Adobe photoshop</Menu.MenuItem>
            <Menu.MenuItem name="1-2">Adobe AfterEffects</Menu.MenuItem>
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup label="NN">
            <Menu.MenuItem name="2-1">Nodejs</Menu.MenuItem>
            <Menu.MenuItem name="2-2">Nvidia</Menu.MenuItem>
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup label="LL">
            <Menu.SubMenu name="3" label="FrontEnd">
              <Menu.MenuItem name="3-1">Vue</Menu.MenuItem>
              <Menu.MenuItem name="3-2">React</Menu.MenuItem>
            </Menu.SubMenu>
          </Menu.MenuItemGroup>
        </Menu>
      </FdBoard>
    );
  }
}
