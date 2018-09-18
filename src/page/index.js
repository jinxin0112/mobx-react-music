import React, { Component } from 'react';
import { Layout, Button, Icon } from 'antd';
import LayoutHeader from '../components/LayoutHeader';
import LayoutSider from '../components/LayoutSider';

const { Header, Sider, Content, Footer } = Layout;
class Index extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <Header>
                    <LayoutHeader />
                </Header>
                <Layout style={{ minHeight: 'calc(100vh - 133px)' }}>
                    <Sider>
                        <LayoutSider />
                    </Sider>
                    <Content>
                        <Button>www</Button>
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Index;