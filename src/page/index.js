import React, { Component } from 'react';
import { Layout, Button, Icon } from 'antd';
import LayoutHeader from '../components/LayoutHeader';
import LayoutSider from '../components/LayoutSider';
import MediaPlayer from '../components/MediaPlayer';
const { Header, Sider, Content, Footer } = Layout;
class Index extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <Header style={{height: 64}}>
                    <LayoutHeader />
                </Header>
                <Layout style={{ minHeight: 'calc(100vh - 134px)' }}>
                    <Sider>
                        <LayoutSider />
                    </Sider>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
                <Footer style={{height: 70, lineHheight: 70 }}>
                    <MediaPlayer />
                </Footer>
            </Layout>
        );
    }
}

export default Index;