import React, { Component } from 'react';
import Layout from '../layout';
const { Header, SideBar, Content, Footer } = Layout;
class Index extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <Content content={this.props.children} />
                <Footer />
            </div>
        );
    }
}

export default Index;