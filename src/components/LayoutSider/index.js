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
        style={{background:'#f6f6f6'}}
      >
          <MenuItemGroup key="g1" title="推荐">
            <Menu.Item key="1"><Icon type="customer-service" theme="outlined" />发现音乐</Menu.Item>
            <Menu.Item key="2"><Icon type="sound" theme="outlined" />私人FM</Menu.Item>
            <Menu.Item key="3"><Icon type="video-camera" theme="outlined" />MV</Menu.Item>
            <Menu.Item key="4"><Icon type="team" theme="outlined" />朋友</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="我的音乐">
            <Menu.Item key="5"><Icon type="apple" theme="outlined" />iTunes音乐</Menu.Item>
            <Menu.Item key="6"><Icon type="download" theme="outlined" />下载的音乐</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g3" title="创建的歌单">
            <Menu.Item key="7"><Icon type="heart" theme="outlined" />我喜欢的音乐</Menu.Item>
          </MenuItemGroup>
      </Menu>
    )
  }
}

export default LayoutSider