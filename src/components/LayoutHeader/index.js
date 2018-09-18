import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import './style.less';

export default class LayoutHeader extends Component {
    render() {
        return (<Row>
            <Col span={4}>
                <div className="music-logo">Jinxin React Music</div>
            </Col>
            <Col span={2}>
                <div className="music-pre-back">
                    <Button>+</Button>
                    <Button>-</Button>
                </div>
            </Col>
            <Col span={6}>
                <div className="music-search">
                    <input type="text" />
                </div>
            </Col>
            <Col span={4} offset={8}>
                <div className="music-toolbar">
                    <Icon type="apple" />
                </div>
            </Col>
        </Row>)
    }
}