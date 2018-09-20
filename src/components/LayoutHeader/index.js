import React, { Component } from 'react';
import { Row, Col, Button, Icon, Input, Avatar } from 'antd';
import './style.less';


export default class LayoutHeader extends Component {
    render() {
        return (<Row>
            <Col span={4}>
                <div className="music-logo"><Icon type="customer-service" theme="outlined" /> King云音乐</div>
            </Col>
            <Col span={2}>
                <div className="music-pre-back">
                    <Button.Group size="small">
                        <Button type="primary">
                            <Icon type="left" />
                        </Button>
                        <Button type="primary">
                            <Icon type="right" />
                        </Button>
                    </Button.Group>
                </div>
            </Col>
            <Col span={6}>
                <div className="music-search">
                    <Input
                        prefix={<Icon type="search" theme="outlined" />}
                        placeholder="搜索音乐, 歌手, 歌词, 用户"
                        onPressEnter={value => console.log(value)}
                        style={{ width: 300 }}
                    />
                </div>
            </Col>
            <Col span={1} offset={8}>
                <Icon type="mail" theme="outlined" style={{fontSize:22}}/>
            </Col>
            <Col span={1}>
                <Icon type="setting" theme="outlined" style={{fontSize:22}}/>
            </Col>
            <Col span={2} style={{borderLeft:'1px solid #902513', textAlign:'center'}}>
                <Avatar icon="user" />
                <Icon type="caret-down" theme="outlined" style={{fontSize:10, marginLeft:10}}/>
            </Col>
        </Row>)
    }
}