import React, { Component } from 'react';
import { Tabs } from '@components/Tabs/Tabs';
import reactLogo from '@assets/images/react.png';
import tsLogo from '@assets/images/ts.png';

import './Tabs.scss';

export default class FdTabs extends Component {
  render() {
    return (
      <div className="demo">
        <img className="logo" src={reactLogo} alt="react" />
        <img className="logo" src={tsLogo} alt="ts" />
        <div className="tabs-wrapper">
          <Tabs activeTabName="2">
            <Tabs.TabPane label="Typescript" name="1">
              TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。
              TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。
            </Tabs.TabPane>
            <Tabs.TabPane label="Javascript" name="2">
              JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。
            </Tabs.TabPane>
            <Tabs.TabPane label="React" name="3">
              React
              可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时React
              也可以高效地更新渲染界面。
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
