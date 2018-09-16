import React, { Component } from 'react'; 
import './layout.less';
import { Layout } from 'antd';
const { Header } = Layout;
export default () => {
    return (<Header className="music-header">
                <div className="music-header-title">
                    Jinxin React Music
                </div>
            </Header>)
}