import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './style.less';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LayoutSider extends Component {
  render() {
    return (
      <Menu
        mode="inline"
      >
          <MenuItemGroup key="g1" title="推荐">
            <Menu.Item key="1">发现音乐</Menu.Item>
            <Menu.Item key="2">私人FM</Menu.Item>
            <Menu.Item key="3">MV</Menu.Item>
            <Menu.Item key="4">朋友</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="我的音乐">
            <Menu.Item key="5">iTunes音乐</Menu.Item>
            <Menu.Item key="6">下载的音乐</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g3" title="创建的歌单">
            <Menu.Item key="7">我喜欢的音乐</Menu.Item>
          </MenuItemGroup>
      </Menu>
    )
  }
}

export default LayoutSider