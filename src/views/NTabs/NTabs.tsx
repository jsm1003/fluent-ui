import React, { Component } from 'react';
import classNames from 'classnames';

import { FdBoard } from '@/views/Board/Board';
import { Tabs } from '@components/Ttabs/Tabs';
import { inject } from '@components/base/appContext';

@inject(['toggleTheme'])
export default class NTabs extends Component<any, any> {
  state = {
    activeTabItem: '1',
  };

  onTabSelect = (event: any) => {};

  render() {
    return (
      <FdBoard>
        <Tabs defaultSelectedItemName="2">
          <Tabs.TabPane head="Typescript" name="1">
            TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。
            TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。
          </Tabs.TabPane>
          <Tabs.TabPane head="Javascript" name="2">
            JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。
          </Tabs.TabPane>
          <Tabs.TabPane head="React" name="3">
            React
            可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时React
            也可以高效地更新渲染界面。
          </Tabs.TabPane>
        </Tabs>
      </FdBoard>
    );
  }
}
